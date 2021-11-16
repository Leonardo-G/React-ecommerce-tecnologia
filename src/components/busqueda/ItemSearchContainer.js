import React, { useEffect, useRef, useState } from 'react';
import { useConsultApi } from '../../hooks/useConsultApi';
import catalogo from "../../data/catalogo.json";
import { ItemProduct } from '../catalogo/ItemProduct';
import { filterMarca, filterMax, filterMin, filterSearch } from '../../helpers/filters';
import { Paginador } from './Paginador';
import { getDocuments } from '../../helpers/getDocumets';

export const ItemSearchContainer = ({inputsValues, setLoading}) => {
    const itemsPage = useRef(6)
    const [totalProducts, setTotalProducts] = useState([]);
    const [searhTotalProducts, setSearhTotalProducts] = useState([])
    const [arrayProducts, setArrayProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [paginacion, setPaginacion] = useState(0)
    const [paginacionArray, setPaginacionArray] = useState([])

    useEffect(() => {
        setLoading(true);
        getDocuments("productos")
            .then(resp => {
                setTotalProducts([...resp]);
                setSearhTotalProducts([...resp]);
                const probar = resp.filter( (product, idx) => idx >= ((itemsPage.current * currentPage) - 6) && idx < (itemsPage.current * currentPage));
                setArrayProducts([...probar]);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const probar = searhTotalProducts.filter( (product, idx) => idx >= ((itemsPage.current * currentPage) - 6) && idx < (itemsPage.current * currentPage));
        
        setArrayProducts([...probar]);
    }, [currentPage])

    useEffect(() => {
        setCurrentPage(1)
        const paginador = Math.ceil(searhTotalProducts.length / itemsPage.current);
        setPaginacion(paginador);
        let paginacionTotal = [];
        for (let i = 1; i <= paginador; i++) {
            paginacionTotal.push(i);
        }
        setPaginacionArray(paginacionTotal)
    }, [searhTotalProducts])


    useEffect(() => {
        
        if(inputsValues.search === "" && inputsValues.min === "0" && inputsValues.max === "" && inputsValues.marca === ""){
            const probar = totalProducts.filter( (product, idx) => idx >= ((itemsPage.current * currentPage) - 6) && idx < (itemsPage.current * currentPage));
        
            setArrayProducts([...probar]);
            return
        }
        const results = totalProducts.filter(r => filterSearch(r, inputsValues.search))
                                     .filter(r => filterMin(r, inputsValues.min, arrayProducts) )
                                     .filter(r => filterMax(r, inputsValues.max, arrayProducts))
                                     .filter(r => filterMarca(r, inputsValues.marca, arrayProducts))
        console.log(results)
        setSearhTotalProducts([...results]);
        const probar = results.filter( (product, idx) => idx >= ((itemsPage.current * currentPage) - 6) && idx < (itemsPage.current * currentPage));
        setArrayProducts([...probar]);

    }, [inputsValues]);

    return (
        <>
            <div className="gridMain">
                {
                    arrayProducts.map( product => (
                        <ItemProduct key={ product.id } { ...product }/>
                    ))
                }
            </div>
            <div className="paginacion">
                {
                    paginacionArray.length > 0 &&
                    paginacionArray.map((page, idx) => (
                        <Paginador key={ idx } page={ page } setCurrentPage={ setCurrentPage }/>
                    ))
                }
            </div>
        </>
    )
}
