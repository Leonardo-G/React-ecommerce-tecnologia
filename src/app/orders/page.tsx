"use client";

import { getDocumentById } from "@/helpers/getDocumets";
import { useEffect, useState } from "react";
import "./order.scss";
import { ordersService } from "@/services/orders/ordersService";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [userOrder, setUserOrder] = useState({
    order: {},
    newOrder: false,
    isExist: false,
    errorInputId: false,
    form: true,
  });

  const [idInput, setIdInput] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersId = JSON.parse(localStorage.getItem("orders") || "[]");
      console.log(ordersId);
      if (ordersId.length) {
        const orders = await ordersService.getOrdersById(ordersId);
        setOrders(orders);
      }
    };

    fetchOrders();
  }, []);

  const handleChangeId = (e) => {
    setIdInput(e.target.value);
  };

  const handleSearchOrder = (e) => {
    e.preventDefault();

    //Validar el input
    if (idInput === "") {
      setUserOrder({
        ...userOrder,
        isExist: false,
        errorInputId: true,
        newOrder: false,
      });
      return;
    }

    getDocumentById(idInput, "orders").then((resp) => {
      //Comprobar si existe la ORDEN con su ID
      if (!resp.isExist) {
        setUserOrder({
          ...userOrder,
          isExist: false,
          errorInputId: false,
          newOrder: true,
        });
        return;
      } else {
        //Guardar los datos en caso de que exista
        setUserOrder({
          ...userOrder,
          order: { ...resp },
          errorInputId: false,
          isExist: true,
          newOrder: true,
        });
      }
    });
  };
  return (
    <main className="container">
      <h2 className="font-bold text-5xl mt-10">Tus Ordenes</h2>
      <div className="space-y-5 mt-10">
        {orders.length &&
          orders.map((order, idx) => (
            <div
              key={idx}
              className="border-1 p-10 rounded-xl border-gray-200 flex justify-between"
            >
              <div>
                <p className="text-2xl font-bold">Order {order.id}</p>
                <p className="mt-2 text-gray-500">
                  {order.products.map((product) => product.modelo).join(", ")}
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-right">
                  $ {(order.products
                    .map((product) => product.precio * product.quantity)
                    .reduce((acc, cur) => acc + cur, 0)) / 100}
                </p>
                <p className="mt-2 text-gray-500">{order.paid_at.toDate().toLocaleString("es-AR")}</p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
