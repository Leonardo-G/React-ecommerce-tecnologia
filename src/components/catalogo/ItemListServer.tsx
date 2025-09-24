import { getDocumentByMarca } from "@/helpers/getDocumets";
import { ItemList } from "./ItemList";

export async function ItemListServer({ category }: { category: string }) {
  const products = await getDocumentByMarca(category);
  
  return <ItemList arrayProducts={products} />;
}
