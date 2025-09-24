import { ordersService } from "@/services/orders/ordersService";
import { Check } from "lucide-react";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderByIdPage({ params }: IProps) {
  const { id } = await params;

  const order = await ordersService.getOrderById(id);
  console.log(order);
  return (
    <main className="mt-10 max-w-[95%] mx-auto w-[50%]">
      <div></div>
      <div className="border border-gray-300 rounded-xl">
        <div className="flex justify-between p-10">
          <div>
            <p className="text-3xl font-bold">Detalles de la Orden</p>
            <p className="text-gray-400 mt-2 text-lg">
              ID de la orden: <span className="text-gray-700">{order.id}</span>
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">
              $ {(order.total / 100).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="h-px bg-gray-300"></div>
        <div className="p-10">
          <p className="text-gray-600 text-2xl font-bold">Productos</p>
          <div className="mt-10">
            {order.products.map((product) => (
              <div key={product.modelo} className="flex justify-between">
                <div>
                  <p className="text-gray-600 text-xl font-bold">
                    {product.modelo}
                  </p>
                  <p className="text-gray-500 text-lg">
                    Cantidad: {product.quantity}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-700">
                    $ {(order.total / 100).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 p-10 rounded-b-xl">
          <p className="text-gray-600 text-2xl font-bold">
            Estado de la entrega
          </p>
          <div className="mt-7 flex align-center gap-5">
            <div>
              <div className="bg-black inline-block p-1 rounded-full">
                <Check height={15} width={15} className="text-white" />
              </div>
            </div>
            <div>
              <p className="text-gray-700 text-xl font-bold">Orden realizada</p>{" "}
              <p className="text-gray-500 text-lg">{order.paid_at.toDate().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
