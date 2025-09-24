import React, { useEffect, useState } from "react";
import { ItemCount } from "../UI/ItemCount";
import { CircleX } from "lucide-react";
import Link from "next/link";

export const CartItem = ({ removeItem, cart, setCart, ...propsItem }) => {
  const { id, imgs, modelo, precio, descripcion, quantity, stock } = propsItem;

  const lengthDesc = descripcion.slice(0, 50);
  const [quantityItem, setQuantityItem] = useState(quantity);

  useEffect(() => {
    //Actualizar la cantidad cuando lo cambie el usuario
    const items = cart.filter((c) => c.id !== id);
    setCart([
      ...items,
      {
        ...propsItem,
        quantity: quantityItem,
      },
    ]);

    // eslint-disable-next-line
  }, [quantityItem]);

  return (
    <div className="flex p-10 bg-white shadow-md rounded-xl items-center justify-between">
      <div className="flex items-center gap-5">
        <img src={imgs} alt={modelo} className="w-50 rounded-xl" />
        <div className="flex flex-col">
          <div className="item--info">
            <Link
              className="font-bold text-2xl hover:underline hover:underline-offset-2"
              href={`/item/${id}`}
            >
              {modelo}
            </Link>
            <p className="text-gray-500"> {lengthDesc}...</p>
          </div>
          <p className="mt-5 font-bold text-2xl">
              {" "}
              $ {(Number(precio / 100) * quantityItem).toFixed(2)}{" "}
            </p>
        </div>
      </div>
      <div>
        <div className="item--buttons">
          <ItemCount
            stock={stock}
            quantity={quantityItem}
            setQuantity={setQuantityItem}
          />
        </div>
        <div className="icon--remove" onClick={() => removeItem(id)}>
          <CircleX />
        </div>
      </div>
    </div>
  );
};
