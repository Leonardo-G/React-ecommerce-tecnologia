import React, { useEffect, useState } from 'react';
import catalogo from "../../data/catalogo.json";
import { useConsultApi } from '../../hooks/useConsultApi';
import { Header } from '../header/Header';
import { Spinner } from '../UI/Spinner';

import { ItemList } from './ItemList';

export const ItemListContainer = () => {

    const [arrayProducts, setArrayProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    //Promise desde la carpeta HOOKS
    const consultApi = useConsultApi(catalogo);

    useEffect(() => {
        consultApi
            .then(res => setArrayProducts(res.marcas))
            .finally(fin => setLoading(false));

        // eslint-disable-next-line
    }, [])
    
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    {
                        loading &&
                        <Spinner />
                    }
                    <div className="gridMain">
                        {   
                            arrayProducts.map( product => (
                                <ItemList 
                                    key={product.marca} 
                                    id={product.marca} 
                                    descripcion={product.descripcion} 
                                    img={product.imgMarca}
                                    productos={product.productos}
                                />
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
