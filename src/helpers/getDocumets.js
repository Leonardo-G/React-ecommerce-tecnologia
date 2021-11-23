import { addDoc, collection, doc, getDoc, getDocs, query, Timestamp, where, writeBatch } from "@firebase/firestore";
import { db } from "../firebase/config";

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

export const getDocumentById = async (idDatabase, collection) => {
    const document = await getDoc( doc(db, collection, idDatabase) );
    return {
        isExist: document.exists(),
        ...document.data(),
        id: document.id
    } 
}

export const setDocument = async (newOrder) => {

    const { items, ...order } = newOrder;

    const newArray = await items.map(item => {
        
        const { descripcion, stock, ...orderCart } = item;

        return orderCart
    })

    const newDoc = await addDoc(collection(db, "orders"), {
        products: newArray, 
        date: Timestamp.fromDate(new Date()),
        ...order
    });

    return newDoc;
}

export const updateDocuments = async (products) => {

    const batch = writeBatch(db);

    products.forEach(p => {
        batch.update(doc(db, "productos", p.id), {
            stock: Number(p.stock) - Number(p.quantity) 
        })
    })

    await batch.commit();
}