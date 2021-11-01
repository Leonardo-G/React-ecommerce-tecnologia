import React, { useEffect, useState } from 'react';
import catalogo from "../../data/catalogo.json";
import { useParams } from 'react-router'
import { useConsultApi } from '../../hooks/useConsultApi';
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

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
                {   productDetail.id &&
                    <ItemDetail { ...productDetail }/>
                }
            </div>
        </main>
    )
}
