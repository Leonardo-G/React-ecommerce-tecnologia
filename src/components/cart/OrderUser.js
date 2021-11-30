import React from 'react'
import { useHistory } from 'react-router';

export const OrderUser = ({ idUserOrder, setIdUserOrder }) => {

    const { push } = useHistory();
    
    const handleIdReady = () => {
        setIdUserOrder("");
        push("/");
    } 

    //Cuando tengamos el ID, se lo mostramos al usuario
    return (
        <div className="orderUser container">
            <p className="orderUser__texto">Muchas Gracias por tu compra!. Te damos el id para ver el estado de tu compra</p>
            <p className="orderUser__id">{ idUserOrder }</p>
            <button 
                className="btn btn--add"
                onClick={ handleIdReady }
            >
                Listo!
            </button>
        </div>
    )
}
