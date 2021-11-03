import React, { useEffect, useState } from 'react';
import catalogo from "../../data/catalogo.json";
import { useParams } from 'react-router'
import { useConsultApi } from '../../hooks/useConsultApi';
import { ItemDetail } from './ItemDetail';
import { ButtonBack } from '../UI/ButtonBack';

export const ItemDetailContainer = () => {

    const [ productDetail, setProductDetail ] = useState({})
    const getItem =  useConsultApi(catalogo)
    const { id: idItem} =useParams();
    

    useEffect( () => {
        getItem
            .then( resp => {
                const product = resp.productos.find( pItem => pItem.id === idItem );
                if(product){
                    setProductDetail({...product});
                    return;
                }
            })

       // eslint-disable-next-line 
    }, [])

    return (
        <main className="main">
            <div className="container">
                <ButtonBack />
                {   productDetail.id &&
                    <ItemDetail { ...productDetail }/>
                }
            </div>
        </main>
    )
}
