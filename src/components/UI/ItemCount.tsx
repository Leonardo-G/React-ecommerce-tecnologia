"use client";
import React from "react";
import "./ItemCount.scss";
import { Minus, Plus } from "lucide-react";

export const ItemCount = ({
  stock,
  handleAddProduct,
  buttonAvailable = false,
  quantity,
  setQuantity,
}) => {
  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="description-buttons">
        <p className="text-gray-500 text-xl"> Stock : {stock}</p>
        <div className="flex gap-5 border border-gray-300 rounded-xl items-center">
          <button className="px-5 py-3 text-3xl cursor-pointer hover:bg-gray-300" onClick={handleDecrement}>
            <Minus />
          </button>
          {stock === "0" ? (
            <p>Sin Stock</p>
          ) : (
            <p className="text-2xl">{quantity}</p>
          )}
          <button className="px-5 py-3 text-3xl cursor-pointer hover:bg-gray-300" onClick={handleIncrement}>
            <Plus />
          </button>
        </div>
      </div>
      {buttonAvailable && (
        <button
          disabled={stock === 0 && true}
          className={`btn btn--add ${stock === 0 && "btn--disabled"}`}
          onClick={() => handleAddProduct(quantity)}
        >
          Agregar Producto
        </button>
      )}
    </>
  );
};
