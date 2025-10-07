import { getDocumentById, getDocumentByIds, updateDocument } from "@/helpers/getDocumets"
import { IOrder } from "@/interface/order.interface";

export const ORDER_COLLECTION = 'orders';

const getOrdersById = async (ids: string[]) => {
    const documents = await getDocumentByIds(ORDER_COLLECTION, ids);
    return documents;
}

const getOrderById = async (id: string) => {
    const order = await getDocumentById(id, ORDER_COLLECTION);
    return order;
}

const updateOrderById = async (id: string, orderToUpdate: Partial<IOrder>) => {
    const order = await updateDocument(ORDER_COLLECTION, id, orderToUpdate);
    return order;
}

export const ordersService = {
    getOrdersById,
    getOrderById,
    updateOrderById
}