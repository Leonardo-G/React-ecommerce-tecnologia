"use client";

import { getDocumentById } from "@/helpers/getDocumets";
import { Suspense, useEffect, useState } from "react";
import "./order.scss";
import { ordersService } from "@/services/orders/ordersService";
import Link from "next/link";
import ListOrders from "./components/ListOrders";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersId = JSON.parse(localStorage.getItem("orders") || "[]");
        if (ordersId.length) {
          const orders = await ordersService.getOrdersById(ordersId);
          setOrders(orders);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <main>
      <h2 className="font-bold text-5xl mt-20">Tus Ordenes</h2>
      {loadingOrders ? (
        <div>
          {Array.from({ length: 5 }, (_, idx) => idx).map((order) => (
            <div className="space-y-5 mt-10" key={order}>
              <div className="border p-10 rounded-xl border-gray-200 flex justify-between animate-pulse">
                <div className="space-y-3 w-full">
                  <div className="h-5 w-100 bg-gray-300 rounded"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-3 flex flex-col items-end">
                  <div className="h-6 w-24 bg-gray-300 rounded"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ListOrders orders={orders} />
      )}
    </main>
  );
}
