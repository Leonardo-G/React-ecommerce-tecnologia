
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDocumentByMarca, getDocuments } from '../../helpers/getDocumets';
import { HeaderContainer } from '../header/HeaderContainer';
import { ButtonBack } from '../UI/ButtonBack';
import { Spinner } from '../UI/Spinner';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
    const [arrayProducts, setArrayProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id: idParam} = useParams();

    useEffect( () => {
        setLoading(true);
        setArrayProducts([]);

        //Si existe el ID, mostraremos las marcas de los productos que existen.
        //Sino traeremos los productos de la marca que el usuario decidio navegar
        const isExistParam = !idParam ? getDocuments("tecnologias") : getDocumentByMarca(idParam)
            
        isExistParam
            .then(resp => setArrayProducts(resp))
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoading(false))

    }, [idParam])
    
    return (
        <>
            {
                !idParam &&
                <HeaderContainer />
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
