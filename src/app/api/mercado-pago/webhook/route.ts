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

      const responsePayment = await payment.get({ id: body.data.id });

      if (responsePayment.status === "approved") {
        const updateOrder = {
          paid_at: Timestamp.fromDate(new Date()),
          status: "COMPLETED",
          stripe_session_id: body.data.id,
          paymentType:
            responsePayment.payment_method_id === "account_money"
              ? [responsePayment.order.type]
              : [responsePayment.payment_type_id],
          paymentDetail: {
            card:
              responsePayment.payment_method_id === "account_money"
                ? responsePayment.order.type
                : responsePayment.payment_type_id,
            last4: responsePayment.card?.last_four_digits
              ? responsePayment.card.last_four_digits
              : null,
            email:
              responsePayment.payment_method_id === "account_money"
                ? responsePayment.payer.email
                : null,
          },
        };
        await ordersService.updateOrderById(
          responsePayment.metadata.order_id,
          updateOrder
        );
        return NextResponse.json({ ok: true }, { status: 201 });
      }

    default:
      return NextResponse.json({ msg: `Event: ${body.type}, no recapted` });
  }
}
