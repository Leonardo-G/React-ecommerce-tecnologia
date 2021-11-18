
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDocumentByMarca, getDocuments } from '../../helpers/getDocumets';
import { Header } from '../header/Header';
import { ButtonBack } from '../UI/ButtonBack';
import { Spinner } from '../UI/Spinner';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
    const [arrayProducts, setArrayProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id: idParam} = useParams();

    useEffect( () => {
        setLoading(true)
        setArrayProducts([])

        const isExistParam = !idParam ? getDocuments("tecnologias") : getDocumentByMarca(idParam)
            
        isExistParam
            .then(resp => setArrayProducts(resp))
            .catch(err => {
                throw new Error(err)
            })
            .finally(() => setLoading(false))

    }, [idParam])
    
    return (
        <>
            {
                !idParam &&
                <Header />
            }
            <main className="main">
                <div className="container">
                    {
                        loading &&
                        <Spinner />
                    }
                    {
                        idParam &&
                        <ButtonBack />
                    }
                    <div className="gridMain">
                        <ItemList arrayProducts={ arrayProducts } setArrayProducts={ setArrayProducts }/>
                    </div>
                </div>
            </main>
        </>
    )
}
