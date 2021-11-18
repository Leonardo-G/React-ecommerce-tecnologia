import React from 'react'
import { Link } from 'react-router-dom'

export const ItemProduct = ({id, imgs, modelo, marca, descripcion}) => {
    return (
        <div className="main__productos">
            <img src={ `../${imgs[0]}` } alt={ modelo }/>
            <div className="marca">
                <h3 className="marca__modelo">{ `${modelo ? modelo : marca} ` }</h3>
                <Link 
                    to={ modelo ? `/Item/${id}` : `/category/${marca}`}
                    className="btn btn--marca"
                >Ver Producto</Link>
                <p className="empresa__info">{ descripcion }</p>
            </div>
        </div>
    )
}
