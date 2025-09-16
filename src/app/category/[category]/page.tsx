import { ItemList } from "../../../components/catalogo/ItemList";
import { HeaderContainer } from "../../../components/header/HeaderContainer";
import { ButtonBack } from "../../../components/UI/ButtonBack";
import { getDocumentByMarca } from "../../../helpers/getDocumets";

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
      {!category && <HeaderContainer />}
      <main className="main">
        <div className="container">
          {category && <ButtonBack />}
          <div className="gridMain">
            <ItemList arrayProducts={products} />
          </div>
        </div>
      </main>
    </div>
  );
}
