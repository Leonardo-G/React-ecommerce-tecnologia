import React from 'react'
import { Link } from 'react-router-dom';
import "./Item.scss"

export const Item = ({ id, img, modelo, marca, descripcion }) => {
    
    const lengthDesc = descripcion.slice(0, 35);
    
    //Si existe la propiedada "modelo", mostraremos los productos de la marca en la etiqueta H3,
    //Sino mostraremos las marcas disponibles. 
    return (
        <div className="main__productos">
            <div className="hover--sombra">

            </div>
            <img src={ img } alt={ modelo }/>
            <div className="marca">
                <h3 className="marca__modelo">{ `${modelo ? modelo : marca} ` }</h3>
                <Link
                    to={ modelo ? `/Item/${id}` : `/category/${marca}`}
                    className="btn btn--marca"
                >Ver Producto</Link>
                <p className="empresa__info">{ lengthDesc }...</p>
            </div>
        </div>
    )
}