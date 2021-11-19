import { faDolly } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { CartItem } from './CartItem';

export const Cart = () => {
    const [total, setTotal] = useState(0)
    const { cart, setCart } = useContext( CartContext );

    const handleRemoveProduct = (id) => {
        const currentCart = cart.filter(c => c.id !== id);
        setCart(currentCart)
    }

    const totalPrice = () => {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total += Number(cart[i].precio) * cart[i].quantity;
        }
        setTotal(total);
    }

    useEffect(() => {
        totalPrice();
        
        //eslint-disable-next-line
    }, [cart])

    return (
        <main className="main">
            {
                cart.length > 0 
                
                ?    <>
                        <h1 className="titleCart">Productos en el carrito</h1>
                        <section className="cart">
                            {
                                cart.map( c => (
                                    <CartItem key={ c.id } { ...c } cart={ cart } setCart={ setCart } handleRemoveProduct={ handleRemoveProduct }/>
                                ))
                            }
                        </section>
                        <div className="divPrice">
                            <p className="totalPrice">Subtotal : $ { total.toFixed(2) }</p>
                            <button className="btn btn--add">Comprar</button>
                        </div>
                    </>
                
                :   
                    <>
                        <h1 className="titleCart">Oops.. No encontramos productos en el carrito</h1>
                        <div className="icon">
                            <FontAwesomeIcon icon={ faDolly }/> 
                            <p>Vuelve a nuestro catálogo que hay muchos productos que te estan esperando</p>
                            <Link to="/busqueda" className="btn btn--add">Ver los productos</Link>
                        </div>
                    </>
            }
        </main>
    )
}
