import Link from "next/link";
import { CheckCircle } from "lucide-react";
import "./styles.scss";
import { IGetSession } from "@/interface/api/session";
import { IGetPayment } from "@/interface/api/payment";
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
  const { order_id, amount_total, paymentDetail, paymentType } =
    await getDetailSession(session_id);
  return (
    <div className="page">
      <main className="main_checkout_success">
        <div>
          <CheckCircle className="icon" />
          <h1 className="title">¡Pago Exitoso!</h1>
          <p className="subtitle">Tu compra ha sido procesada correctamente.</p>

          <SuccessDetail
            amount_total={amount_total}
            paymentDetail={paymentDetail}
            paymentType={paymentType}
            order_id={order_id}
          />

          <div className="buttons">
            <Link href="/" className="button-black">
              <div>Continuar Comprando</div>
            </Link>

            <Link href="/orders" className="button-border">
              <div>Ver mis pedidos</div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
