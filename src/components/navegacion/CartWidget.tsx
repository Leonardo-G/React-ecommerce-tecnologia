"use client"

import React, { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { CartContext } from '@/context/CartContext';

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
