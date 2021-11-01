export const useConsultApi = ( catalogo ) => {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            if(catalogo){
                resolve(catalogo)
                return
            }
            reject("No se encontro la API");
        }, 1500);
    })
}