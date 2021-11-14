import React, { useState } from 'react';

export const ItemCount = ({quantityDefault = 1, stock, handleAddProduct, buttonAvailable = false }) => {
    
    const [quantity, setQuantity] = useState(quantityDefault);

    const handleIncrement = () => {
        if( quantity < stock ){
            setQuantity( quantity + 1);
        }
    }

    const handleDecrement = () => {
       if( quantity !== 1 ) {
           setQuantity( quantity - 1 );
       } 
    } 

    return (
        <>
            <div className="description-buttons">
                <button 
                    className="btn btn--producto"
                    onClick={ handleDecrement }
                    > - </button>
                    {
                        stock === "0"
                        ?   <p>Sin Stock</p>
                        :   <p className="description-quantity">{ quantity }</p>                       
                    }
                <button 
                    className="btn btn--producto"
                    onClick={ handleIncrement }
                    > + </button>
                <p> Stock : { stock }</p>
            </div>
            {
                buttonAvailable &&
                <button
                    className="btn btn--add"
                    onClick={ () => handleAddProduct( quantity ) }
                >Agregar Producto</button>    
            }
        </>
    )
}
