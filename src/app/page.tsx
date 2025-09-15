"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDocumentByMarca, getDocuments } from "../helpers/getDocumets";
import { HeaderContainer } from "../components/header/HeaderContainer";
import { Spinner } from "../components/UI/Spinner";
import { ButtonBack } from "../components/UI/ButtonBack";
import { ItemList } from "../components/catalogo/ItemList";

export default function HomePage() {
  const [arrayProducts, setArrayProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id: idParam } = useParams();

  useEffect(() => {
    setLoading(true);
    setArrayProducts([]);

    //Si existe el ID, mostraremos las marcas de los productos que existen.
    //Sino traeremos los productos de la marca que el usuario decidio navegar
    const isExistParam = !idParam
      ? getDocuments("tecnologias")
      : getDocumentByMarca(idParam);

    isExistParam
      .then((resp) => setArrayProducts(resp))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [idParam]);

  return (
    <>
      {!idParam && <HeaderContainer />}
      <main className="main">
        <div className="container">
          {loading && <Spinner />}
          {idParam && <ButtonBack />}
          <div className="gridMain">
            <ItemList
              arrayProducts={arrayProducts}
            />
          </div>
        </div>
      </main>
    </>
  );
}
