import { IBody, ICheckoutItem } from "@/interface/api/payment";
import { productsService } from "@/services/products/products.service";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { NextResponse } from "next/server";
import { array, number, object, string } from "yup";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_API_ACCESS_TOKEN,
});

const postSchema = object({
  items: array(
    object({
      id: string().required(),
      quantity: number().required(),
    })
  ),
  order_id: string().required(),
});

interface ICheckoutItemMercadoPago extends ICheckoutItem {
  id: string;
  quantity: number;
}

interface IBodyMercadoPago {
  items: ICheckoutItemMercadoPago[];
  order_id: string;
}

export async function POST(request: Request) {
  const body = (await postSchema.validate(
    await request.json()
  )) as IBodyMercadoPago;

  try {
    const products = await productsService.getProducts(
      body.items.map((item) => item.id)
    );
    const items: Items[] = products.map((product) => ({
      title: product.modelo,
      quantity: body.items.find((item) => item.id === product.id).quantity,
      currency_id: "ARS",
      unit_price: Number(product.precio) / 100,
      id: product.id,
    }));
    const preference = new Preference(client);
    const responsePreference = await preference.create({
      body: {
        items,
        metadata: { order_id: body.order_id },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_URL_FRONT}/checkout/success`,
          failure: `${process.env.NEXT_PUBLIC_URL_FRONT}/checkout/cancel`,
          pending: `${process.env.NEXT_PUBLIC_URL_FRONT}/checkout/pending`,
        },
        auto_return: "approved",
        notification_url: `${process.env.NEXT_PUBLIC_URL_FRONT}/api/mercado-pago/webhook?source_news=webhooks`,
      },
    });
    return NextResponse.json(responsePreference);
  } catch (error) {
    console.log(error);

  }
}
