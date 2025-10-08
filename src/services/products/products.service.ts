import { getDocumentByIds } from "@/helpers/getDocumets";
import { Product } from "@/interface/products.interface";

export const PRODUCTS_COLLECTION = "productos";

const getProducts = async (ids: string[]): Promise<Product[]> => {
  const products = await getDocumentByIds(PRODUCTS_COLLECTION, ids);
  return products;
};

export const productsService = {
    getProducts
}