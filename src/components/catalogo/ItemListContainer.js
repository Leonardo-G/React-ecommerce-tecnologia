
import React, { useEffect, useState } from 'react';
import { getDocuments } from '../../helpers/getDocumets';
import { Header } from '../header/Header';
import { Spinner } from '../UI/Spinner';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
    const [arrayProducts, setArrayProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        getDocuments("marcas")
            .then(resp => setArrayProducts(resp))
            .catch(err => console.log(err, "error al obtener los datos"))
            .finally(() => setLoading(false))
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
