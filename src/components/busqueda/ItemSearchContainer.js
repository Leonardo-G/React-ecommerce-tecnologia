import React, { useEffect, useState } from 'react';
import { useConsultApi } from '../../hooks/useConsultApi';
import catalogo from "../../data/catalogo.json";
import { ItemProduct } from '../catalogo/ItemProduct';

export const ItemSearchContainer = ({inputsValues, setLoading}) => {
    const [arrayProducts, setArrayProducts] = useState([]);
    const consultApi = useConsultApi(catalogo);

    useEffect(() => {
        setLoading(true);
        consultApi
            .then(resp => {
                if(inputsValues.search === ""){
                    setArrayProducts([...resp.productos])
                    return;
                }
                const results = resp.productos.filter(r => r.modelo.toLowerCase().includes(inputsValues.search.toLowerCase()));
                setArrayProducts([...results])
            })
            .finally(fin => setLoading(false));

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
