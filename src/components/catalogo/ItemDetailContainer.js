import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = ({idProduct, arrayProducts}) => {

    const [productDetail, setProductDetail] = useState({})
    
    console.log(idProduct)
    
    const getItem = () => {
        return new Promise (resolve => {
            setTimeout(() => {
                arrayProducts.forEach( p => {
                    const product = p.productos.find( pItem => pItem.id === idProduct);
                    resolve(product)
                })

            }, 2000);
        })
    }

    useEffect( () => {
        getItem()
            .then( resp => setProductDetail({...resp}))
    }, [idProduct])

    return (
        <>
        {   productDetail.id &&
            <ItemDetail { ...productDetail }/>
        }
        </>
    )
}
