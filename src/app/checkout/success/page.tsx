import Link from "next/link";
import { CheckCircle } from "lucide-react";
import "./styles.scss";
import { IGetSession } from "@/app/interface/api/session";
import { IGetPayment } from "@/app/interface/api/payment";
import SuccessDetail from "./component/SuccessDetail";

interface IProps {
  searchParams: Promise<{
    session_id: string;
  }>;
}

async function getDetailSession(sessionId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_FRONT}/api/stripe/session/${sessionId}`
    );
    const session: IGetSession = await response.json();

    const paymentIntentResponse = await fetch(
      `${process.env.NEXT_PUBLIC_URL_FRONT}/api/stripe/payment/${session.paymentIntentId}`
    );

    const paymentIntent: IGetPayment = await paymentIntentResponse.json();
    return { ...session, ...paymentIntent };
  } catch (error) {
    console.log(error);
  }
}

export default async function SuccessPage({ searchParams }: IProps) {
  const { session_id } = await searchParams;
  const { order_id, amount_total, paymentMethod } = await getDetailSession(
    session_id
  );
  return (
    <div className="page">
      <main className="main_checkout_success">
        <div>
          <CheckCircle className="icon" />
          <h1 className="title">¡Pago Exitoso!</h1>
          <p className="subtitle">Tu compra ha sido procesada correctamente.</p>

          <SuccessDetail
            amount_total={amount_total}
            card={paymentMethod.card}
            last4={paymentMethod.last4}
            order_id={order_id}
          />

          <div className="buttons">
            <div className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium button-black">
              <Link href="/">Continuar Comprando</Link>
            </div>

            <div className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-md font-medium bg-transparent button-border">
              <Link href="/orders">Ver mis pedidos</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
