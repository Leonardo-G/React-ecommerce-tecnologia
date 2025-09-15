//ARCHIVO de funciones CRUD con FIREBASE
import { addDoc, collection, doc, getDoc, getDocs, query, Timestamp, where, writeBatch } from "@firebase/firestore";
import { db } from "../firebase/config";

//Otenemos todos los documentos segun COLLECTION DATA
export const getDocuments = async (collectionData) => {
    const collectionFirestore = await getDocs(collection(db, collectionData));
    const dataArray = [];
    collectionFirestore.forEach(data => {
            dataArray.push({
                id: data.id,
                ...data.data()
            })
    });
    return dataArray;
}

//Obtenemos lo/s documentos que coincidan con MARCA DATABASE en la colección "MARCA"
export const getDocumentByMarca = async (marcaDatabase) => {
    const search = query(collection(db, "productos"), where("marca", "==", marcaDatabase))
    
    const documents = await getDocs(search);

    const dataArray = [];
    documents.forEach(data => {
            dataArray.push({
                id: data.id,
                ...data.data()
            })
    })
    return dataArray;
}

//Obtenemos los documentos segun el ID = ID DATA BASE y segun la COLECCION = COLLECTION
export const getDocumentById = async (idDatabase, collection) => {
    const document = await getDoc( doc(db, collection, idDatabase) );
    return {
        isExist: document.exists(),
        ...document.data(),
        id: document.id
    } 
}

//Creamos un documento
export const setDocument = async (newOrder) => {

    const { items, ...order } = newOrder;

    //Primero sacamos la DESCRIPCION y el STOCK, y lo retornamos sin ellos en cada producto
    const newArray = await items.map(item => {
        
        const { descripcion, stock, ...orderCart } = item;

        return orderCart
    })

    //Enviamos la orden
    const newDoc = await addDoc(collection(db, "orders"), {
        products: newArray, 
        date: Timestamp.fromDate(new Date()),
        ...order
    });

    return newDoc;
}

//Actualizar el documento
export const updateDocuments = async (products) => {

    const batch = writeBatch(db);

    //En este caso, actualizamos el stock
    products.forEach(p => {
        batch.update(doc(db, "productos", p.id), {
            stock: Number(p.stock) - Number(p.quantity) 
        })
    })

    await batch.commit();
}