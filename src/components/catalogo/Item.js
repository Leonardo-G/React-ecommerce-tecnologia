import React, { useEffect, useState } from 'react'
import catalogo from "../../data/catalogo.json";
import { useParams } from 'react-router'
import { useConsultApi } from '../../hooks/useConsultApi';
import { ItemProduct } from './ItemProduct';
import { ButtonBack } from '../UI/ButtonBack';
import { Spinner } from '../UI/Spinner';
import { getDocumentByMarca, getDocumentsById } from '../../helpers/getDocumets';

export const Item = () => {

    const {id: idParam} = useParams();
    
    const [arrayProducts, setArrayProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDocumentByMarca(idParam)
            .then(resp => setArrayProducts(resp))
            .finally(() => setLoading(false))

    }, [idParam]);

    return (
        <main className="main">
            <div className="container">
                <ButtonBack />
                {   loading &&
                    <Spinner />
                }
                <div className="gridMain">
                    {
                        arrayProducts.map( product => (
                            <ItemProduct key={ product.id} { ...product }/>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}
