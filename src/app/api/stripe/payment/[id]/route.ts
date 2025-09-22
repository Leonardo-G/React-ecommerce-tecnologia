import { IGetPayment } from "@/app/interface/api/payment";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<IGetPayment>> {
  const { id } = await params;
  const paymentIntent = await stripe.paymentIntents.retrieve(id, {
    expand: ["payment_method"],
  });
  return NextResponse.json({
    id: paymentIntent.id,
    paymentMethod: {
      card: (paymentIntent.payment_method as Stripe.PaymentMethod).card.brand,
      last4: (paymentIntent.payment_method as Stripe.PaymentMethod).card.last4,
    },
  });
}
