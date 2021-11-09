import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {

    const { cart } = useContext( CartContext )

    return (
        <Link className="navegacion__icono" to="/cart">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <div className="iconoCantidadProducto">
                <p>{cart.length}</p>
            </div>
        </Link>
    )
}
