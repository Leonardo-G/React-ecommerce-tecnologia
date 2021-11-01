import React from 'react'
import { Link } from 'react-router-dom'

export const ItemProduct = ({id, imgs, modelo}) => {
    return (
        <div className="main__productos">
            <img src={ `../${imgs[0]}` } alt={ modelo }/>
            <div className="marca">
                <h3 className="marca__modelo">{ modelo }</h3>
                <Link 
                    to={`/Item/${id}`}
                    className="btn btn--marca"
                >Ver Producto</Link>
            </div>
        </div>
    )
}
