import { getDocumentById } from "../../../helpers/getDocumets";
import { ButtonBack } from "../../../components/UI/ButtonBack";
import { ItemDetail } from "../../../components/itemDetail/ItemDetail";

const COLLECTION = "productos";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ItemPage({ params }: IProps) {
  const { id } = await params;
  const productDetail = await getDocumentById(id, COLLECTION);

  return (
    <main className="w-[1200px] max-w-[95%] mx-auto pb-20">
      <div>
        {productDetail?.id && (
          <>
            <ButtonBack />
            <ItemDetail {...productDetail} />
          </>
        )}
      </div>
    </main>
  );
}
