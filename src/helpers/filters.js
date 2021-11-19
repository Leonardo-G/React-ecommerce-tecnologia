export const filterSearch = ( product , input, arrayProducts) => {
    if( input !== "" ){
        return product.modelo.toLowerCase().includes(input.toLowerCase())
    }
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

export const filterItemsPage = ( products, itemsPage, currentPage ) => {
    
    const filterResolve = products.filter( (product, idx) => idx >= ((itemsPage.current * currentPage) - itemsPage.current) && idx < (itemsPage.current * currentPage));

    return { filterResolve }
}