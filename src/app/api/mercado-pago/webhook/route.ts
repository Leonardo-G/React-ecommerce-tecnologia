import { NextResponse } from "next/server";
import { Timestamp } from "firebase/firestore";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { ordersService } from "@/services/orders/ordersService";

export const config = {
  api: {
    bodyParser: false,
  },
};
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_API_ACCESS_TOKEN,
});

export async function POST(request: Request) {
  const body = await request.json();
  switch (body.type) {
    case "payment":
      const payment = new Payment(client);
      console.log(body, "BODY")
      const responsePayment = await payment.get({ id: body.data.id });
      console.log(responsePayment, "RESPONSE PAYMENT")
      if (responsePayment.status === "approved") {
        const updateOrder = {
          paid_at: Timestamp.fromDate(new Date()),
          status: "COMPLETED",
          stripe_session_id: body.data.id,
          paymentType: ["MERCADO PAGO"],
          paymentDetail: {
            card: null,
            last4: null,
            email: responsePayment.payer.email,
          },
        };
        await ordersService.updateOrderById(responsePayment.metadata.order_id, updateOrder);
        return NextResponse.json({ ok: true }, { status: 201 });
      }

    default:
      return NextResponse.json({ msg: `Event: ${body.type}, no recapted` });
  }
}
