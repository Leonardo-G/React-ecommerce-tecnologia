import React, { useState } from 'react'
import { getDocumentById } from '../../helpers/getDocumets';
import "./Orden.scss";

export const Orden = () => {

    const [userOrder, setUserOrder] = useState({
        order: {},
        newOrder: false,
        isExist: false,
        errorInputId: false,
        form: true
    })

    const [idInput, setIdInput] = useState("");

    const handleChangeId = (e) => {
        setIdInput(e.target.value);
    }

    const handleSearchOrder = (e) => {
        e.preventDefault();

        if(idInput === "") {
            setUserOrder({
                ...userOrder,
                errorInputId: true
            });
            return;
        }

        getDocumentById(idInput, "orders")
            .then(resp => {
                if(!resp.isExist){
                    setUserOrder({
                        ...userOrder,
                        isExist: false,
                        errorInputId: false,
                        newOrder: true
                    });
                    return
                }else{
                    setUserOrder({
                        ...userOrder,
                        order: {...resp},
                        errorInputId: false,
                        isExist: true,
                        newOrder: true
                    });
                }
            })
    }

    return (
        <main className="container">
            {  !userOrder.isExist  &&
                <form className="orden">
                    <label>Escriba su ID del orden</label>
                    <input 
                        type="text"
                        name="id"
                        onChange={ handleChangeId }   
                        placeholder="Su ID"
                    />
                    <input 
                        type="submit"
                        onClick={ handleSearchOrder }
                        className="btn btn--add"
                        value="Buscar Orden"
                    />
                    { userOrder.errorInputId && <p className="error">Se requiere colocar un ID</p> }
                    { !userOrder.isExist & userOrder.newOrder && <p className="error">No existe un orden con su ID</p> }
                </form>
            }
            {
                userOrder.order.products &&
                <div className="orderList">
                    <h3>Su Pedido</h3>
                    <p>Cantidad de Productos = {userOrder.order.products.length}</p>
                    <p> Total : $ { userOrder.order.total }</p>
                    <p> Estado <span className="orderList__pending">Pendiente</span></p>
                </div>
            }
        </main>
    )
}
