import { NextResponse } from "next/server";
import Stripe from "stripe";
import { array, number, object, string } from "yup";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const postSchema = array(
  object({
    price_id: string().required(),
    quantity: number().required(),
  })
);
interface ICheckoutItem {
  price_id: string;
  quantity: number;
}

export async function POST(request: Request) {
  try {
    const body = (await postSchema.validate(
      await request.json()
    )) as ICheckoutItem[];
    
    const stripeItems = body.map((i) => ({
      price: i.price_id,
      quantity: i.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: stripeItems,
      success_url: `${process.env.NEXT_PUBLIC_URL_FRONT}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL_FRONT}/checkout/cancel`,
    });
    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
