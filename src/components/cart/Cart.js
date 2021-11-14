import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from './CartItem';

export const Cart = () => {

    const { cart } = useContext( CartContext );

    return (
        <main className="main">
            <h1>Productos en el carrito</h1>
            <section className="cart">
                {
                    cart.map( c => (
                        <CartItem key={ c.id } { ...c }/>
                    ))
                }
            </section>
        </main>
    )
}
