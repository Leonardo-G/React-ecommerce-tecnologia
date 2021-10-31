import React, { useEffect, useState } from 'react';
//En el futuro se consulta a la api creada
import catalogo from "../../data/catalogo.json";
import { ItemDetailContainer } from './ItemDetailContainer';
// import { ItemCount } from "./ItemCount";
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

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
    
    const consultaJSON = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(catalogo){
                    resolve(catalogo)
                    return
                }
                reject("No se encontro la API");
            }, 1500);
        })
    }

    useEffect(() => {
        consultaJSON()
            .then(res => setArrayProducts([...res]))
            .catch(err => console.log(err))
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
        <div className="main">
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
                {
                    idProduct.length > 0 &&
                    <ItemDetailContainer idProduct={idProduct} arrayProducts={arrayProducts}/>
                }
            </div>
        </div>
    )
}
