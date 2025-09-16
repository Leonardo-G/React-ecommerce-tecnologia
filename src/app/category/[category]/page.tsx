import { ItemListServer } from "@/components/catalogo/ItemListServer";
import { ItemList } from "../../../components/catalogo/ItemList";
import { ButtonBack } from "../../../components/UI/ButtonBack";
import { getDocumentByMarca } from "../../../helpers/getDocumets";
import { Suspense } from "react";
import { Spinner } from "@/components/UI/Spinner";

interface IProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: IProps) {
  const { category } = await params;
  const products = await getDocumentByMarca(category);

  return (
    <div>
      <main className="main">
        <div className="container">
          {category && <ButtonBack />}
          <div className="gridMain">
            <Suspense
              fallback={
                <div className="spinner-container">
                  <Spinner />
                </div>
              }
            >
              <ItemListServer category={category} />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
