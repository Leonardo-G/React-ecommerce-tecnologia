import { faDolly } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { CartItem } from './CartItem';
import { FormUser } from './FormUser';
import { Sending } from "./Sending";
import { setDocument, updateDocuments } from "../../helpers/getDocumets";
import "./Cart.scss"
import { OrderUser } from './OrderUser';

export const Cart = () => {

    const { cart, setCart, removeItem, clear } = useContext( CartContext );
    const [error, setError] = useState(false);
    const [total, setTotal] = useState(0);
    const [formValues, setFormValues] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });
    const [sending, setSending] = useState(false);
    const [idUserOrder, setIdUserOrder] = useState("");

    //Precio TOTAL de todos los productos
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

    const handleChangeInputs = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSetOrder = async () => {
        //Primero validamos campos del Formulario
        const { nombre, email, telefono } = formValues;
        const nombreValidate = validator.isLength(nombre, {min: 3});
        const emailValidate = validator.isEmail(email);
        const telefonoValidate = validator.isNumeric(telefono, {no_symbols: false})
        
        if( !nombreValidate || !emailValidate || !telefonoValidate ) {
            //Error si no se completa correctamente los campos del formulario
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 2000);
            return;
        };

        setSending(true);
        const newOrder = {
            nombre,
            telefono,
            email,
            items: cart,
            total: total
        }
        
        //Enviar la orden nueva a Firebase, y actualizar los stocks de los productos
        const [ order ] = await Promise.all([setDocument(newOrder), updateDocuments(cart)]);
        setIdUserOrder(order.id);

        //Limpiar el carrito
        clear();
        setSending(false);
    }
    
    return (
        <main className="main">
            {
                sending &&
                <Sending />
            }
            {
                idUserOrder !== ""

                ?   <OrderUser idUserOrder={ idUserOrder } setIdUserOrder={ setIdUserOrder }/>
                
                :   (cart.length > 0)
                
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
                                onClick={ clear }
                            >Vaciar Carrito</button>
                        </div>
                        <section>
                            <div className="order">
                                <h2>Rellena los campos</h2>
                                <FormUser handleChangeInputs={ handleChangeInputs }/>
                                <button 
                                    className="btn btn--add"
                                    onClick={ handleSetOrder }
                                >Comprar</button>
                            { error && <p className="error">Completa los campos correctamente</p> }
                            </div>
                        </section>
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
