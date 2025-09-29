import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_API_ACCESS_TOKEN,
});

export async function POST() {
  console.log("LLEGA");

  
  try {
    const preference = new Preference(client);
    const responsePreference = await preference.create({
      body: {
        items: [
          {
            title: "Gaseosa",
            quantity: 1,
            unit_price: 100,
            id: "id?",
            currency_id: "ARS",
          },
        ],
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_URL_FRONT}/success`,
          failure: `${process.env.NEXT_PUBLIC_URL_FRONT}/failure`,
          pending: `${process.env.NEXT_PUBLIC_URL_FRONT}/pending`,
        },
        auto_return: "approved",
      },
    });
    return NextResponse.json(responsePreference);
  } catch (error) {
    console.log(error);
  }
}
