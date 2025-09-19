import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(_req: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    
    const session = await stripe.checkout.sessions.retrieve(id);

    return NextResponse.json(session);
}