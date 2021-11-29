import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = ({ handleCloseMenu }) => {

    const { totalProducts } = useContext( CartContext )

    return (
        <Link className="navegacion__icono" to="/cart" onClick={ handleCloseMenu }>
            <FontAwesomeIcon icon={ faShoppingCart }/>
            <div className="iconoCantidadProducto">
                <p>{ totalProducts }</p>
            </div>
        </Link>
    )
}
