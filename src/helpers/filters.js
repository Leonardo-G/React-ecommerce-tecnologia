/////Archivo para utilizar en los filtros de busqueda/////

//PRODUCT --- Item de los productos 
//INPUT   --- Valor del input
//ARRAY...--- Arreglo donde realizaremos la busqueda

export const filterSearch = ( product , input, arrayProducts) => {
    if( input !== "" ){
        
        //En caso de que el input tenga los mismos caracteres en el arreglo ARRAYPRDUCTOS, vamos a retornar el/los PRODUCT/S
        return product.modelo.toLowerCase().includes(input.toLowerCase())
    }

    //si es un INPUT vacio, retornamos el ARRAY... completo.
    return arrayProducts
}

export const filterMin = ( product , input, arrayProducts) => {
    if(input !== "0"){
        return Number(product.precio) >= Number(input)
    }
    return arrayProducts
}

export const filterMax = ( product , input, arrayProducts) => {
    if(input !== ""){
        return Number(product.precio) <= Number(input)
    }
    return arrayProducts
}

export const filterMarca = ( product , input, arrayProducts) => {
    if(input !== ""){
        return product.marca.toLowerCase() === input.toLowerCase()
      }

      return arrayProducts
}

//ITEMSPAGE     --- Valor de la cantidad de ITEMS a mostrar
//CURRENTPAGE   --- Valor de la pagina actual
export const filterItemsPage = ( products, itemsPage, currentPage ) => {
    
    //Devolvemos la cantidad de ITEMSPAGE segun el CURRENTPAGE. 
    //Ejemplo ITEMSPAGE   = 6
    //        CURRENTPAGE = 1      //Retornamos 6 ITEMSPAGE en la pagina 1 (CURRENTPAGE)               
    const filterResolve = products.filter( (product, idx) => idx >= ((itemsPage.current * currentPage) - itemsPage.current) && idx < (itemsPage.current * currentPage));

    return { filterResolve }
}