export const filterSearch = ( product , input) => {
    return product.modelo.toLowerCase().includes(input.toLowerCase())
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