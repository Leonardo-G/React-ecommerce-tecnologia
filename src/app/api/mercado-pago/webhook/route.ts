import { NextResponse } from "next/server";
import { Timestamp } from "firebase/firestore";
import { MercadoPagoConfig, Payment } from "mercadopago";

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
          paymentType: "MERCADO PAGO",
          // paymentDetail: {
          //   card: paymentIntent.payment_method_types.includes("card")
          //     ? (paymentIntent.payment_method as Stripe.PaymentMethod).card.brand
          //     : null,
          //   last4: paymentIntent.payment_method_types.includes("card")
          //     ? (paymentIntent.payment_method as Stripe.PaymentMethod).card.last4
          //     : null,
          //   email: paymentIntent.payment_method_types.includes("link")
          //     ? (paymentIntent.payment_method as Stripe.PaymentMethod).link.email
          //     : null,
          // },
        };
      }

      return NextResponse.json({ ok: true }, { status: 201 });

    default:
      return NextResponse.json({ msg: `Event: ${body.type}, no recapted` });
  }
}
