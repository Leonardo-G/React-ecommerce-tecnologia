import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail';
import { ButtonBack } from '../UI/ButtonBack';
import { getDocumentById } from '../../helpers/getDocumets';

export const ItemDetailContainer = () => {

    const [ productDetail, setProductDetail ] = useState({})
    const { id: idItem } =useParams();

    useEffect( () => {
        getDocumentById(idItem)
            .then( resp => setProductDetail({...resp}))
            .catch(err => console.log("No se pudo encontrar el producto", err))

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
