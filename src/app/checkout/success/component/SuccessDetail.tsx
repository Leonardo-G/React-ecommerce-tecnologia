"use client";

import { CartContext } from "@/context/CartContext";
import { useContext, useEffect } from "react";

interface IProps {
    order_id: string;
    amount_total: number;
    card: string;
    last4: string
}

export default function SuccessDetail({order_id, amount_total, card, last4}: IProps) {

    const { clear } = useContext(CartContext);

    useEffect(() => {
        clear();
    }, [])

    return (
        <div className="box">
            <h2>Detalles de la compra</h2>
            <div className="detail-row">
              <span className="label">Identificador de orden:</span>
              <span className="value">{order_id}</span>
            </div>
            <div className="detail-row">
              <span className="label">Total pagado:</span>
              <span className="value">
                $ {(amount_total / 100).toFixed(2)}
              </span>
            </div>
            <div className="detail-row">
              <span className="label">Método de pago:</span>
              <div>
                <span className="value">{ card }</span>
                <span className="value_last4">* { last4 }</span>
              </div>
            </div>
          </div>
    );
}