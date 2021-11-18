
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDocumentByMarca, getDocuments } from '../../helpers/getDocumets';
import { Header } from '../header/Header';
import { Spinner } from '../UI/Spinner';
import { ItemList } from './ItemList';
import { ItemProduct } from './ItemProduct';

export const ItemListContainer = () => {
    const [arrayProducts, setArrayProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id: idParam} = useParams();

    useEffect( () => {
        if(!idParam){
            getDocuments("tecnologia")
                .then(resp => setArrayProducts(resp))
                .catch(err => console.log(err, "error al obtener los datos"))
                .finally(() => setLoading(false))
            }else{
            getDocumentByMarca(idParam)
                .then(resp => setArrayProducts(resp))
                .finally(() => setLoading(false))
        }
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
                    <div className="gridMain">
                        {   
                            // !idParam
                            // ?   arrayProducts.map( product => (
                            //         <ItemList 
                            //             key={product.marca} 
                            //             id={product.marca} 
                            //             descripcion={product.descripcion} 
                            //             img={product.imgMarca}
                            //             productos={product.productos}
                            //         />
                            //     ))
                            // :   
                            arrayProducts.map( product => (
                                <ItemProduct key={ product.id} { ...product }/>
                                ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
