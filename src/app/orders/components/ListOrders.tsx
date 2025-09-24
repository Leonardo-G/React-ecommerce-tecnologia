import Link from "next/link";

export default function ListOrders({orders}) {
    return (
        <div className="space-y-5 mt-10">
          {orders.map((order, idx) => (
            <Link
              href={`/orders/${order.id}`}
              key={idx}
              className="border-1 p-10 rounded-xl border-gray-200 flex justify-between hover:shadow-xl transition-300 transition-all shadow-gray-100"
            >
              <div>
                <p className="text-2xl font-bold">Order {order.id}</p>
                <p className="mt-2 text-gray-500">
                  {order.products.map((product) => product.modelo).join(", ")}
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-right">
                  ${" "}
                  {order.products
                    .map((product) => product.precio * product.quantity)
                    .reduce((acc, cur) => acc + cur, 0) / 100}
                </p>
                <p className="mt-2 text-gray-500">
                  {order.paid_at.toDate().toLocaleString("es-AR")}
                </p>
              </div>
            </Link>
          ))}
        </div>
    );
}