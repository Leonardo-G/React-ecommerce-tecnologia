import React, { useEffect, useState } from 'react'
import { getDocumentById } from '../../helpers/getDocumets';
import "./Orden.scss";

export const Orden = () => {

    const [userOrder, setUserOrder] = useState({
        order: {},
        newOrder: false,
        isExist: false,
        errorInputId: false
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
            setTimeout(() => setUserOrder({...userOrder, errorInputId: false}), 2500);
            return;
        }

        getDocumentById(idInput, "orders")
            .then(resp => {
                if(!resp.isExist){
                    setUserOrder({
                        ...userOrder,
                        isExist: false,
                        newOrder: true
                    });
                    setTimeout(() => {
                        setUserOrder({
                            ...userOrder,
                            isExist: false,
                            newOrder: false
                        });
                    }, 2500);
                    return
                }else{
                    setUserOrder({
                        ...userOrder,
                        order: {...resp},
                        isExist: true,
                        newOrder: true
                    });
                }
            })
    }

    return (
        <main className="container">
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
        </main>
    )
}
