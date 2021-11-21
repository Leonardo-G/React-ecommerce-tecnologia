import { faDolly } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { CartItem } from './CartItem';
import { FormUser } from './FormUser';
import { setDocument, updateDocuments } from "../../helpers/getDocumets";
import "./Cart.scss"

export const Cart = () => {
    const { cart, setCart, removeItem } = useContext( CartContext );
    const [total, setTotal] = useState(0);
    const [form, setForm] = useState(false)

    const totalPrice = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += Number(cart[i].precio) * cart[i].quantity;
        };
        setTotal(total);
    }

    useEffect(() => {
        totalPrice();
        
        //eslint-disable-next-line
    }, [cart]);

    const handleSetOrder = async ( ) => {

        const newOrder = {
            nombre: "",
            tel: "",
            email: "",
            items: cart,
            total: total
        }
        
        const [ order, updateStock ] = await Promise.all([setDocument(newOrder), updateDocuments(cart)])

        console.log(order.id)
        console.log(updateStock)
    }
    return (
        <main className="main">
            {
                cart.length > 0 
                
                ?    <>
                        <h1 className="titleCart">Productos en el carrito</h1>
                        <section className="cart">
                            {
                                cart.map( c => (
                                    <CartItem key={ c.id } { ...c } cart={ cart } setCart={ setCart } removeItem={ removeItem }/>
                                ))
                            }
                        </section>
                        <div className="divPrice">
                            <p className="totalPrice">Subtotal : $ { total.toFixed(2) }</p>
                            <button 
                                className="btn btn--add"
                                onClick={ handleSetOrder }
                            >Continuar Compra</button>
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

            <section>
                <div>
                    <h2>Rellena los campos</h2>
                    <FormUser />
                </div>
            </section>
        </main>
    )
}
