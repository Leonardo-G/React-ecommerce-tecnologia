import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail';
import { ButtonBack } from '../UI/ButtonBack';
import { getDocumentById } from '../../helpers/getDocumets';
import { Spinner } from '../UI/Spinner';

export const ItemDetailContainer = () => {

    const [ productDetail, setProductDetail ] = useState({});
    const [loading, setLoading] = useState(true);
    const { id: idItem } = useParams();

    useEffect( () => {
        getDocumentById(idItem, "productos")
            .then( resp => setProductDetail({...resp}))
            .catch(err => console.log("No se pudo encontrar el producto", err))
            .finally(() => setLoading(false))

       // eslint-disable-next-line 
    }, [])

    return (
        <main className="main">
            <div className="container">
                {
                    loading
                    ? <Spinner />
                    :  productDetail.id &&
                        <>
                            <ButtonBack />
                            <ItemDetail { ...productDetail }/>
                        </>
                }
            </div>
        </main>
    )
}
