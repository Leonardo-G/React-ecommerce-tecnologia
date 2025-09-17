"use client";

import Link from "next/link";
import { DollarSign } from "lucide-react";
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
  const { cart, setCart, removeItem, clear } = useContext(CartContext);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
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

  const handleChangeInputs = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSetOrder = async () => {
    setSending(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_FRONT}/api/stripe/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          cart.map((value) => ({
            quantity: value.quantity,
            price_id: value.stripe_price_id,
          }))
        ),
      });
      const session = await response.json();
      window.location.href = session.url;
    } catch (error) {
      console.log(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="main">
      {idUserOrder !== "" ? (
        <OrderUser idUserOrder={idUserOrder} setIdUserOrder={setIdUserOrder} />
      ) : cart.length > 0 ? (
        <>
          <h1 className="titleCart">Productos en el carrito</h1>
          <section className="cart">
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
          <div className="divPrice">
            {!sending ? (
              <>
                <p className="totalPrice">Subtotal : $ {(total / 100).toFixed(2)}</p>
                <button className="btn btn--add" onClick={handleSetOrder}>
                  Comprar
                </button>
              </>
            ) : (
              <Spinner />
            )}
          </div>
        </>
      ) : (
        <>
          <h1 className="titleCart">
            Oops.. No encontramos productos en el carrito
          </h1>
          <div className="icon">
            <DollarSign />
            <p>
              Vuelve a nuestro catálogo que hay muchos productos que te estan
              esperando
            </p>
            <Link href="/busqueda" className="btn btn--add">
              Ver los productos
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
