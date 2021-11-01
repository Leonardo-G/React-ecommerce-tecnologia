import React, { useEffect, useState } from 'react'
import catalogo from "../../data/catalogo.json";
import { useParams } from 'react-router'
import { useConsultApi } from '../../hooks/useConsultApi';
import { ItemProduct } from './ItemProduct';

export const Item = () => {

    const [arrayProducts, setArrayProducts] = useState([])

    const {id: idParam} = useParams();

    const consultJSON = useConsultApi(catalogo);

    useEffect(() => {
        consultJSON
            .then(resp => {
                const result = resp.find( r => r.marca === idParam)
                setArrayProducts([...result.productos]);
                console.log(result.productos)
            })
    }, [idParam])
    console.log(arrayProducts)

    return (
        <main className="main">
            <div className="container gridMain">
                {
                    arrayProducts.map( product => (
                        <ItemProduct key={ product.id} { ...product }/>
                    ))
                }
            </div>
        </main>
    )
}
