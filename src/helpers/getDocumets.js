import { collection, doc, getDoc, getDocs, query, where } from "@firebase/firestore";
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
    console.log(dataArray)
    return dataArray;
}

export const getDocumentById = async (idDatabase) => {
    const document = await getDoc( doc(db, "productos", idDatabase) );
    return {
        ...document.data(),
        id: document.id
    } 
}