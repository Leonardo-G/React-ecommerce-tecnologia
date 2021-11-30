//Obtnemos el total de la paginas, segun la cantida de TOTAL PRODUCTS
export const totalPaginacion = ( totalProducts, itemsPage ) => {
    const paginador = Math.ceil(totalProducts.length / itemsPage.current);
        
        let paginacionTotal = [];
        for (let i = 1; i <= paginador; i++) {
            paginacionTotal.push(i);
        }
    
    return { paginador, paginacionTotal }
}