import React, { useEffect, useState } from 'react';

import { useConsultApi } from '../../hooks/useConsultApi';
import catalogo from "../../data/catalogo.json";

export const ItemSearchContainer = () => {
    const [arrayProducts, setArrayProducts] = useState([])
    const consultApi = useConsultApi(catalogo)

    console.log(consultApi)

    useEffect(() => {
        consultApi
            .then(resp => {
                const res = resp.map(p => {
                    setArrayProducts([...p.productos, ...arrayProducts])
                    return
                })
            })
    }, [])

    return (
        <div>
            
        </div>
    )
}
