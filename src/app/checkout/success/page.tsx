import Link from "next/link";
import { CheckCircle } from "lucide-react";
import "./styles.scss";
import { IGetSession } from "@/interface/api/session";
import { IGetPayment } from "@/interface/api/payment";
import SuccessDetail from "./component/SuccessDetail";
import { MercadoPagoConfig, Payment } from "mercadopago";

interface IProps {
  searchParams: Promise<{
    session_id?: string;
    payment_id?: string;
  }>;
}

enum TypePayment {
  MERCADO_PAGO = "MERCADO_PAGO",
  STRIPE = "STRIPE",
}

async function getPaymentDetail(id: string, type: TypePayment) {
  const payment = {
    amount_total: null,
    paymentDetail: null,
    paymentType: null,
    order_id: null,
  };
  if (type === TypePayment.STRIPE) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_FRONT}/api/stripe/session/${id}`
      );
      const session: IGetSession = await response.json();

      const paymentIntentResponse = await fetch(
        `${process.env.NEXT_PUBLIC_URL_FRONT}/api/stripe/payment/${session.paymentIntentId}`
      );

      const paymentIntent: IGetPayment = await paymentIntentResponse.json();

      payment.amount_total = session.amount_total;
      payment.paymentDetail = paymentIntent.paymentDetail;
      payment.order_id = session.order_id;
      payment.paymentType = paymentIntent.paymentType;

      return payment;
    } catch (error) {
      console.log(error);
    }
  }

  if (type === TypePayment.MERCADO_PAGO) {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_API_ACCESS_TOKEN,
    });
    const paymentInit = new Payment(client);

    const responsePayment = await paymentInit.get({ id });

    payment.amount_total = responsePayment.transaction_amount * 100;
    payment.order_id = responsePayment.metadata.order_id;
    payment.paymentType = responsePayment.payment_method_id === "account_money" ? [responsePayment.order.type] : [responsePayment.payment_type_id];
    payment.paymentDetail = {
      card: responsePayment.payment_method_id === "account_money" ? responsePayment.order.type : responsePayment.payment_type_id,
      last4: responsePayment.card?.last_four_digits ? responsePayment.card.last_four_digits : null,
      email: responsePayment.payment_method_id === "account_money" ? responsePayment.payer.email : null,
    };

    return payment;
  }
}

export default async function SuccessPage({ searchParams }: IProps) {
  const params = await searchParams;
  const { amount_total, order_id, paymentDetail, paymentType } =
    await getPaymentDetail(
      params?.payment_id ? params.payment_id : params.session_id,
      params?.payment_id ? TypePayment.MERCADO_PAGO : TypePayment.STRIPE
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
