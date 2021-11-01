import React, { useState } from 'react'
//Futuro  contador en el producto
export const ItemCount = ({ stock }) => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if( quantity < stock ){
            setQuantity( quantity + 1);
        }
    }

    const handleDecrement = () => {
       if( quantity !== 1 ) {
           setQuantity( quantity - 1 )
       } 
    } 

    const handleAddCart = () => {
        alert(`Luego se agregara al carrito | Producto/s agregado/s: ${quantity}`);
    }

    return (
        <>
            <div className="description-buttons">
                <button 
                    className="btn btn--producto"
                    onClick={ handleDecrement }
                    > - 1</button>
                <p className="description-quantity">{ quantity }</p>
                <button 
                    className="btn btn--producto"
                    onClick={ handleIncrement }
                    > + 1</button>
                <p> Stock : { stock }</p>
            </div>
            <button
                className="btn btn--add"
                onClick={ handleAddCart }
            >Agregar Producto</button>
        </>
    )
}
