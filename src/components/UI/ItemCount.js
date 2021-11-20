import React from 'react';
import "./ItemCount.scss";

export const ItemCount = ({ stock, handleAddProduct, buttonAvailable = false, quantity, setQuantity }) => {
    

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
                <p className="description-stock"> Stock : { stock }</p>
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
