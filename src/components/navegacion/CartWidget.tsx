"use client"

import React, { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import Link from 'next/link';

export const CartWidget = ({ handleCloseMenu }) => {

    const { totalProducts } = useContext( CartContext )

    return (
        <Link className="navegacion__icono" href="/cart" onClick={ handleCloseMenu }>
            <ShoppingCart />
            <div className="iconoCantidadProducto">
                <p>{ totalProducts }</p>
            </div>
        </Link>
    )
}
