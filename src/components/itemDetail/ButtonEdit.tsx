"use client"

import { Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export const ButtonEdit = ({ handleEdit, handleRemove }) => {
  return (
    <>
      <p className="description-quantity">Agregado</p>
      <div className="productModified">
        <button className="edit btn btn--add" onClick={handleEdit}>
          Editar
        </button>
        <button
          className="icon icon--delete"
          onClick={handleRemove}
          title="Eliminar Producto"
        >
          <Trash2 />
        </button>
      </div>
      <Link className="btn btn--add" href="/cart">
        Finalizar Compra
      </Link>
    </>
  );
};
