import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    
    //Obtener los datos del LocalStorage en caso de que haya
    const jsonArray = JSON.parse(localStorage.getItem("cartArrayTechnologyReact")) || [];

    const [cart, setCart] = useState(jsonArray);
    const [totalProducts, setTotalProducts] = useState(0)

    //Funcion para agregar productos al CART
    const addProduct = (id, objProduct) => {
        //Primero comprobamos que exista. Si existe, eliminamos el duplicado
        const isExist = cart.some( c => c.id === id);

        if(isExist){
            const filterProduct = cart.filter( c => c.id !== id);
            setCart([...filterProduct, objProduct]);

            return;
        }

        //Si no existe, agrega un nuevo producto al estado CART
        setCart([...cart, objProduct]);
    }

    //Funcion para eliminar un Item del Carrito
    const removeItem = (id) => {
        const filterProduct = cart.filter( c => c.id !== id);
        setCart(filterProduct)
    }

    //Funcion para limpiar todo el Carrito
    const clear = () => {
        setCart([]);
    }

    useEffect(() => {
        //Actualizamos el localStorage cuando se modificar el carrito
        localStorage.setItem("cartArrayTechnologyReact", JSON.stringify(cart));
        
        //Obtnemos el total de la cantidad de productos que hay en el carrito
        let totalQuantity = 0;
        cart.forEach( c => {
            totalQuantity = totalQuantity + c.quantity
        })

        setTotalProducts(totalQuantity)
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart, addProduct, removeItem, clear, totalProducts }}>
            { children }
        </CartContext.Provider>
    )
}