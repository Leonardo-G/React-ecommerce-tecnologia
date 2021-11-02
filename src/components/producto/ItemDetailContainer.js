import React, { useEffect, useState } from 'react';
import catalogo from "../../data/catalogo.json";
import { useHistory, useParams } from 'react-router'
import { useConsultApi } from '../../hooks/useConsultApi';
import { ItemDetail } from './ItemDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

export const ItemDetailContainer = () => {

    const {goBack} = useHistory()

    const [ productDetail, setProductDetail ] = useState({})
    const getItem =  useConsultApi(catalogo)
    const { id: idItem} =useParams();
    

    useEffect( () => {
        getItem
            .then( resp => {
                resp.forEach( p => {
                    const product = p.productos.find( pItem => pItem.id === idItem );
                    if(product){
                        console.log(product)
                        setProductDetail({...product});
                        return;
                    }
                    console.log(product)
                })
            })
    }, [])

    return (
        <main className="main">
            <div className="container">
                <div className="icon--back" onClick={() => goBack()}>
                    <FontAwesomeIcon icon={ faBackward }/>
                    <p>Atrás</p>
                </div>
                {   productDetail.id &&
                    <ItemDetail { ...productDetail }/>
                }
            </div>
        </main>
    )
}
