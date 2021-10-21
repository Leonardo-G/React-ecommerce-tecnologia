import React from 'react'
//Futuro  contador en el producto
export const ItemCount = ({quantity, setQuantity, stockProduct}) => {

    const handleIncrement = () => {
        if( quantity < stockProduct ){
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
        <div>
            <p style={{fontSize: "2rem"}}>Cantidad disponible : { stockProduct }</p>
            <button 
                className="btn btn--producto"
                onClick={ handleDecrement }
            > - 1</button>
            <p style={{fontSize: "2rem"}}>{ quantity }</p>
            <button 
                className="btn btn--producto"
                onClick={ handleIncrement }
            > + 1</button>
            <button
                onClick={ handleAddCart }
            >Agregar Producto</button>
        </div>
    )
}
