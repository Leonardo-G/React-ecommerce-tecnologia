import { getDocumentByIds } from "@/helpers/getDocumets"

export const ORDER_COLLECTION = 'orders';

const getOrdersById = async (ids: string[]) => {
    const documents = await getDocumentByIds(ORDER_COLLECTION, ids);
    return documents;
}

export const ordersService = {
    getOrdersById,
}