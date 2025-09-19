import Link from "next/link";
import { CheckCircle } from "lucide-react";
import "./styles.scss";
import Stripe from "stripe";

interface IProps {
  searchParams: Promise<{
    session_id: string;
  }>;
}

async function getSession(sessionId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_FRONT}/api/stripe/session/${sessionId}`,);
  const session = await response.json();
  return session as Stripe.Checkout.Session;
}

export default async function SuccessPage({ searchParams }: IProps) {
  const { session_id } = await searchParams;
  const session = await getSession(session_id);
  return (
    <div className="page">
      <main className="main">
        <div>
          <CheckCircle className="icon" />
          <h1 className="title">¡Pago Exitoso!</h1>
          <p className="subtitle">Tu compra ha sido procesada correctamente.</p>

          <div className="box">
            <h2>Detalles de la compra</h2>
            <div className="detail-row">
              <span className="label">Número de orden:</span>
              <span className="value">#12345</span>
            </div>
            <div className="detail-row">
              <span className="label">Total pagado:</span>
              <span className="value">$ {(session.amount_total / 100).toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span className="label">Método de pago:</span>
              <span className="value">Tarjeta de crédito</span>
            </div>
            <div className="detail-row">
              <span className="label">Fecha:</span>
              <span className="value">
                {new Date().toLocaleDateString("es-AR")}
              </span>
            </div>
          </div>

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
