import React, { useEffect, useRef, useState } from 'react';
import { Item } from '../catalogo/Item';
import { filterItemsPage, filterMarca, filterMax, filterMin, filterSearch } from '../../helpers/filters';
import { Paginador } from './Paginador';
import { getDocuments } from '../../helpers/getDocumets';
import { totalPaginacion } from '../../helpers/searchFunctions';

export const ProductsFilter = ({inputsValues, setLoading}) => {

    const itemsPage = useRef(6);

    //Guardamos todos los productos en este estado, para no consultar siempre a Firebase, por cada filtro de busqueda
    const [totalProducts, setTotalProducts] = useState([]);

    //Los productos actuales segun el filtro de busqueda, filtrando los productos del estado anterior
    const [searhTotalProducts, setSearhTotalProducts] = useState([]);
    
    //La cantidad de productos que se muestran en pantalla
    const [arrayProducts, setArrayProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [           , setPaginacion] = useState(0);
    const [paginacionArray, setPaginacionArray] = useState([]);

    //Obtener los datos de Firestore
    useEffect(() => {
        setLoading(true);
        getDocuments("productos")
            .then(resp => {
                setTotalProducts([...resp]);
                setSearhTotalProducts([...resp]);
            })
            .finally(() => setLoading(false));

    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        //Reiniciamos el numero de pagina actual al realizar una busqueda.
        setCurrentPage(1);

        //Obtenemos la cantidad de paginas que tenemos que tener al realizar una busqueda 
        const { paginador, paginacionTotal } = totalPaginacion(searhTotalProducts, itemsPage);

        setPaginacion(paginador);
        setPaginacionArray(paginacionTotal);
    }, [searhTotalProducts])


    useEffect(() => {

        //Mostraremos en pantalla la cantidad de productos segun lo indicado en el "ITEMSPAGE", guardado en el useRef
        const { filterResolve }= filterItemsPage(searhTotalProducts, itemsPage, currentPage);
        setArrayProducts([...filterResolve]);

    }, [currentPage, searhTotalProducts])

    //Filtrando busqueda
    useEffect(() => {
        const results = totalProducts.filter(r => filterSearch(r, inputsValues.search, totalProducts))
                                     .filter(r => filterMin(r, inputsValues.min, totalProducts) )
                                     .filter(r => filterMax(r, inputsValues.max, totalProducts))
                                     .filter(r => filterMarca(r, inputsValues.marca, totalProducts));
        
        setSearhTotalProducts([...results]);

    // eslint-disable-next-line
    }, [inputsValues]);

    return (
        <>
            <div className="gridMain">
                {
                    arrayProducts.map( product => (
                        <Item key={ product.id } img={ product.imgs[0] } { ...product }/>
                    ))
                }
            </div>
            <div className="paginacion">
                {
                    paginacionArray.length > 0 &&
                    paginacionArray.map((page) => (
                        <Paginador key={ page} page={ page } currentPage={ currentPage } setCurrentPage={ setCurrentPage }/>
                    ))
                }
            </div>
        </>
    )
}
