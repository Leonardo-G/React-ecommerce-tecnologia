import React, { useState } from 'react';
//En el futuro se consulta a la api creada
import catalogo from "../../data/catalogo.json";
import { ItemCount } from "./ItemCount";

export const ItemListContainer = () => {

    const [quantity, setQuantity] = useState(1);
    const stockProduct = 15;

    //Proximamente va a ir los campos de cada una de las marcas y sus productos.

    return (
        <div className="main">
            <div className="gridMain">
                <div className="main__marca">
                    <img src="./assets/imagenes/lgmain.jpg" alt="marca lg"/>
                    <div className="empresa">
                        <h3 className="empresa__marca">{catalogo[0].marca}</h3>
                        <button className="btn btn--marca">Ver Productos</button>
                        <p className="empresa__info">Descripcion lorem sadaq safñnasd nasdoasd</p>
                        
                    </div>
                </div>
                <div className="gridMain">
                    Proximamente mas marcas
                </div>
            </div>

            {/* Contador que estara dentro de un producto */}
            <ItemCount quantity={quantity} setQuantity={setQuantity} stockProduct={stockProduct}/>
        </div>
    )
}
