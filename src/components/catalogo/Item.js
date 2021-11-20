import React from 'react'
import { Link } from 'react-router-dom';
import "./Item.scss"

export const Item = ({ id, imgs, modelo, marca, descripcion }) => {
    
    const lengthDesc = descripcion.slice(0, 35);
    
    return (
        <div className="main__productos">
            <img src={ `../${imgs[0]}` } alt={ modelo }/>
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
