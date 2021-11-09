import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const ItemCount = ({ stock, handleAddProduct, showButtonAdd, setShowButtonAdd }) => {

    const [quantity, setQuantity] = useState(1);

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

    const handleEdit = () => {
        setShowButtonAdd(false);
    }

    return (
        <>
            {
                !showButtonAdd 

                ?   <>  
                        <div className="description-buttons">
                            <button 
                                className="btn btn--producto"
                                onClick={ handleDecrement }
                                > - 1</button>
                                {
                                    stock === "0"
                                    ?   <p>Sin Stock</p>
                                    :   <p className="description-quantity">{ quantity }</p>                       
                                }
                            <button 
                                className="btn btn--producto"
                                onClick={ handleIncrement }
                                > + 1</button>
                            <p> Stock : { stock }</p>
                        </div>
                        <button
                            className="btn btn--add"
                            onClick={ () => handleAddProduct( quantity ) }
                        >Agregar Producto</button>
                    </>

                :   
                    <>
                        <p className="description-quantity">Agregado</p>
                        <button className="btn btn--add"
                            onClick={ handleEdit }>Editar</button>
                        <Link 
                            className="btn btn--add"
                            to="/cart"
                        >
                            Finalizar Compra
                        </Link>
                    </>
            }
        </>
    )
}
