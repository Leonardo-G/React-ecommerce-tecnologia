import React, { useEffect, useState } from 'react';
import catalogo from "../../data/catalogo.json";
import { useConsultApi } from '../../hooks/useConsultApi';
import { Header } from '../header/Header';

import { ItemDetailContainer } from '../producto/ItemDetailContainer';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

    //Guardar la consulta del Api
    const [arrayProducts, setArrayProducts] = useState([]);

    const [quantity, setQuantity] = useState(1);
    const stockProduct = 15;
    
    const [idProduct, setIdProduct] = useState("")
    const [detailProduct, setDetailProduct] = useState({})

    const [showProducts, setShowProducts] = useState({
        show: false,
        brand: ""
    })
    const handleShowProduct = (id) => {
        setShowProducts({show: true, brand: id});
        productsShow(id)
    }
    
    const consultApi = useConsultApi(catalogo);

    useEffect(() => {
        consultApi
            .then(res => setArrayProducts(res))
    }, [])


    const productsShow = (brand) => {
        if(brand === ""){
            setArrayProducts([...catalogo]);
            return;
        }

        const devolver = arrayProducts.filter(product => product.marca === brand)
        setArrayProducts([...devolver])
        console.log(devolver)
    }

    const handleReverse = () => {
        setShowProducts({
            show: false,
            brand: ""
        })
        productsShow("")
    }

    const handleShowDetailProduct = (id) => {
        setIdProduct(id)
    }
    
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="gridMain">
                        {   
                            arrayProducts.map( product => (
                                <ItemList 
                                    key={product.marca} 
                                    id={product.marca} 
                                    descripcion={product.descripcion} 
                                    img={product.imgMarca} 
                                    handleShowProduct={handleShowProduct} 
                                    setShowProducts={setShowProducts} 
                                    showProducts={showProducts} 
                                    productsShow={productsShow}
                                    productos={product.productos}
                                    handleShowDetailProduct={handleShowDetailProduct}
                                />
                            ))
                        }
                    </div>
                    {
                        showProducts.brand !== "" && 
                            <div className="btn btn--reverse" onClick={handleReverse}>Atras</div>
                    }
                </div>
            </main>
        </>
    )
}
