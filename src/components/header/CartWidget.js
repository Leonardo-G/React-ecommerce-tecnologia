import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {

    //futuro carrito
    const carrito = [1,2]

    return (
        <div className="navegacion__icono">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <div className="iconoCantidadProducto">
                <p>{carrito.length}</p>
            </div>
        </div>
    )
}
