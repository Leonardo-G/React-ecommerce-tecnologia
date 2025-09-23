import { updateDocument } from "@/helpers/getDocumets";
import { Timestamp } from "firebase/firestore";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function getRawBody(req: Request) {
  const buf = Buffer.from(await req.arrayBuffer());
  return buf;
}

export async function POST(req: Request) {
  let event: Stripe.Event;
  const signature = req.headers.get("stripe-signature");
  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.log(error, "ERROR signature");
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      const orderId = event.data.object.metadata.order_id;

      const paymentIntent = await stripe.paymentIntents.retrieve(
        session.payment_intent.toString(),
        {
          expand: ["payment_method"],
        }
      );
      const updateOrder = {
        paid_at: Timestamp.fromDate(new Date()),
        status: "COMPLETED",
        stripe_session_id: session,
        payment_type: paymentIntent.payment_method_types,
        paymentDetail: {
          card: paymentIntent.payment_method_types.includes("card")
            ? (paymentIntent.payment_method as Stripe.PaymentMethod).card.brand
            : null,
          last4: paymentIntent.payment_method_types.includes("card")
            ? (paymentIntent.payment_method as Stripe.PaymentMethod).card.last4
            : null,
          email: paymentIntent.payment_method_types.includes("link")
            ? (paymentIntent.payment_method as Stripe.PaymentMethod).link.email
            : null,
        },
      };
      await updateDocument("orders", orderId, updateOrder);
      break;

    default:
      break;
  }
  return new NextResponse(null, { status: 204 })
}
