"use client";

import { IPaymentDetail } from "@/app/interface/api/payment";
import { CartContext } from "@/context/CartContext";
import { useContext, useEffect } from "react";

interface IProps {
  order_id: string;
  amount_total: number;
  paymentType: string[];
  paymentDetail: IPaymentDetail;
}

export default function SuccessDetail({
  order_id,
  amount_total,
  paymentDetail,
  paymentType,
}: IProps) {
  const { clear } = useContext(CartContext);

  useEffect(() => {
    console.log("limpio");
    clear();
  }, []);

  return (
    <div className="box">
      <h2>Detalles de la compra</h2>
      <div className="detail-row">
        <span className="label">Identificador de orden:</span>
        <span className="value">{order_id}</span>
      </div>
      <div className="detail-row">
        <span className="label">Total pagado:</span>
        <span className="value">$ {(amount_total / 100).toFixed(2)}</span>
      </div>
      <div className="detail-row">
        <span className="label">Método de pago:</span>
        <div>
          <span className="value">
            {paymentType.includes("card") ? paymentDetail.card : paymentType[0]}
          </span>
          <span className="value_last4">
            *{" "}
            {paymentType.includes("card")
              ? paymentDetail.last4
              : paymentDetail.email}
          </span>
        </div>
      </div>
    </div>
  );
}
