"use client";

import Link from "next/link";
import { ArrowRight, DollarSign, ShoppingCart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { CartItem } from "@/components/cart/CartItem";
import { FormUser } from "@/components/cart/FormUser";
import { OrderUser } from "@/components/cart/OrderUser";
import { Sending } from "@/components/cart/Sending";
import { CartContext } from "@/context/CartContext";
import { setDocument, updateDocuments } from "@/helpers/getDocumets";
import validator from "validator";
import "../../components/cart/Cart.scss";
import { Spinner } from "@/components/UI/Spinner";

export default function Cart() {
  const { cart, setCart, removeItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [sending, setSending] = useState(false);
  const [idUserOrder, setIdUserOrder] = useState("");

  //Precio TOTAL de todos los productos
  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += Number(cart[i].precio) * cart[i].quantity;
    }
    setTotal(total);
  };

  useEffect(() => {
    totalPrice();

    //eslint-disable-next-line
  }, [cart]);

  const newOrder = {
    items: cart,
    total: total,
    stripe_session_id: null,
    status: "INCOMPLETED",
  };

  const handleSetOrder = async () => {
    setSending(true);
    try {
      const createOrder = await setDocument(newOrder);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_FRONT}/api/stripe/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cart.map((value) => ({
              quantity: value.quantity,
              price_id: value.stripe_price_id,
            })),
            order_id: createOrder.id,
          }),
        }
      );
      const session = await response.json();
      window.location.href = session.url;
    } catch (error) {
      console.log(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      {idUserOrder !== "" ? (
        <OrderUser idUserOrder={idUserOrder} setIdUserOrder={setIdUserOrder} />
      ) : cart.length > 0 ? (
        <>
          <h1 className="mt-10 text-center text-5xl font-bold">
            Productos en el carrito
          </h1>
          <section className="mt-10 space-y-10">
            {cart.map((c) => (
              <CartItem
                key={c.id}
                {...c}
                cart={cart}
                setCart={setCart}
                removeItem={removeItem}
              />
            ))}
          </section>
          <div className="w-full border-t mt-20 border-gray-200"></div>
          <div className="flex justify-between mt-10 items-end">
            {!sending ? (
              <>
                <p className="text-3xl font-bold">
                  Subtotal : $ {(total / 100).toFixed(2)}
                </p>
                <button
                  className="flex items-center gap-3 rounded-xl bg-black text-white px-15 py-5 text-2xl cursor-pointer hover:shadow-xl duration-300 transition-all hover:bg-black/85"
                  onClick={handleSetOrder}
                >
                  Comprar
                  <ShoppingCart size={20} className="mb-0.5" />
                </button>
              </>
            ) : (
              <Spinner />
            )}
          </div>
        </>
      ) : (
        <>
          <h1 className="mt-10 text-5xl font-bold text-center">
            Carrito de compras
          </h1>
          <div className="mt-50 text-center flex flex-col justify-center items-center gap-5">
            <ShoppingCart size={60} className="text-gray-500 fill-gray-500" />
            <p className="text-3xl text-center">Tu carrito está vacío</p>
            <p className="text-2xl text-gray-500">
              Parece que no has añadido nada a tu carrito. ¡Explora nuestros
              productos y encuentra algo que te guste!
            </p>
            <Link href="/" className="mt-5 flex items-center gap-3 rounded-xl bg-black text-white px-15 py-5 text-2xl cursor-pointer hover:shadow-xl duration-300 transition-all hover:bg-black/85">
              Seguir comprando
              <ArrowRight size={20} className="mb-0.5" />
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
