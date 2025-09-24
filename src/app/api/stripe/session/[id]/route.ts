import { IGetSession } from "@/interface/api/session";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<IGetSession>> {
  const { id } = await params;

  const session = await stripe.checkout.sessions.retrieve(id);

  return NextResponse.json({
    id: session.id,
    paymentIntentId: session.payment_intent as string,
    amount_total: session.amount_total,
    order_id: session.metadata?.order_id,
    status: session.status,
  });
}
