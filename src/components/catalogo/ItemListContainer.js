import React from 'react';
//En el futuro se consulta a la api creada
import catalogo from "../../data/catalogo.json";

export const ItemListContainer = () => {

    //Proximamente va a ir los campos de cada una de las marcas y sus productos.

    return (
        <div className="main__marca">
            <p>{catalogo[0].marca}</p>
            <p>Descripcion</p>
            <img src="#!" alt="imagen"/>
            <button>Boton para ir a los productos de la marca</button>
        </div>
    )
}
