import Link from "next/link";
import { XCircle } from "lucide-react";
import "./styles.scss";

export default function CancelPage() {
  return (
    <div className="page">
      <main className="main">
        <div>
          <XCircle className="icon" />
          <h1 className="title">Pago Cancelado</h1>
          <p className="subtitle">
            Tu pago ha sido cancelado. No se ha realizado ningún cargo a tu tarjeta.
          </p>

          <div className="box">
            <h2>¿Qué pasó?</h2>
            <div>
              <p>• El pago fue cancelado por el usuario</p>
              <p>• No se procesó ningún cargo</p>
              <p>• Los productos siguen disponibles en tu carrito</p>
            </div>
          </div>

          <div className="tip">
            <p>
              <strong>Tip:</strong> Si experimentaste algún problema durante el pago, puedes intentar nuevamente o
              contactar a nuestro soporte.
            </p>
          </div>

          <div className="buttons">
            <div className="bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium button-black">
              <Link href="/cart">Volver al Carrito</Link>
            </div>

            <div
              className="border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-md font-medium bg-transparent button-border"
            >
              <Link href="/">Continuar Comprando</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
