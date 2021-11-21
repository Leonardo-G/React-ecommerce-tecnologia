import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const jsonArray = JSON.parse(localStorage.getItem("cartArray")) || [];

    const [cart, setCart] = useState(jsonArray);

    //Funcion para agregar al estado CART
    const addProduct = (id, objProduct) => {
        //Primero comprobamos que exista. Si existe, eliminamos el duplicado
        const isExist = cart.some( c => c.id === id);

        if(isExist){
            const filterProduct = cart.filter( c => c.id !== id);
            setCart([...filterProduct, objProduct]);

            return;
        }

        //Sino agrega un nuevo producto al estado CART
        setCart([...cart, objProduct]);
    }

    const removeItem = (id) => {
        const filterProduct = cart.filter( c => c.id !== id);
        setCart(filterProduct)
    }

    const clear = () => {
        setCart([]);
    }

    //Actualizamos el localStorage
    useEffect(() => {
        localStorage.setItem("cartArray", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart, addProduct, removeItem, clear }}>
            { children }
        </CartContext.Provider>
    )
}