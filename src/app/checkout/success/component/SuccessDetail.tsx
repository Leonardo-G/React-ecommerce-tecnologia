"use client";

import { IPaymentDetail } from "@/interface/api/payment";
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
    const orders: string[] = JSON.parse(localStorage.getItem("orders")) || [];

    if (!orders.includes(order_id)) {
      orders.push(order_id);
    }

    localStorage.setItem("orders", JSON.stringify(orders));

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
            {["card", "credit_card", "debit_card"].some(type => paymentType.includes(type))
              ? paymentDetail.card
              : paymentType[0]}
          </span>
          <span className="value_last4">
            *{" "}
            {["card", "credit_card", "debit_card"].some(type => paymentType.includes(type))
              ? paymentDetail.last4
              : paymentDetail.email}
          </span>
        </div>
      </div>
    </div>
  );
}
