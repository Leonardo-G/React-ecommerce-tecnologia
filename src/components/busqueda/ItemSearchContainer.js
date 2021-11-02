import React, { useEffect, useState } from 'react';
import { useConsultApi } from '../../hooks/useConsultApi';
import catalogo from "../../data/catalogo.json";
import { ItemProduct } from '../catalogo/ItemProduct';

export const ItemSearchContainer = ({inputsValues}) => {
    const [arrayProducts, setArrayProducts] = useState([])
    const consultApi = useConsultApi(catalogo)

    console.log(consultApi)

    useEffect(() => {
        consultApi
            .then(resp => {
                if(inputsValues.search === ""){
                    setArrayProducts([...resp.productos])
                    return;
                }
                const results = resp.productos.filter(r => r.modelo.toLowerCase().includes(inputsValues.search.toLowerCase()));
                return setArrayProducts([...results])
            })
    }, [inputsValues.search])

    return (
        <>
            {
                arrayProducts.map( product => (
                    <ItemProduct key={ product.id } { ...product }/>
                ))
            }
        </>
    )
}
