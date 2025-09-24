import { getDocumentById, getDocumentByIds } from "@/helpers/getDocumets"

export const ORDER_COLLECTION = 'orders';

const getOrdersById = async (ids: string[]) => {
    const documents = await getDocumentByIds(ORDER_COLLECTION, ids);
    return documents;
}

const getOrderById = async (id: string) => {
    const order = await getDocumentById(id, ORDER_COLLECTION);
    return order;
}

export const ordersService = {
    getOrdersById,
    getOrderById
}