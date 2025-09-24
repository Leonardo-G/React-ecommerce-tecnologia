"use client";
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

  useEffect(() => {
    setLoading(true);
    setArrayProducts([]);

    const productsByBrand = getDocuments("tecnologias");

    productsByBrand
      .then((resp) => setArrayProducts(resp))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <HeaderContainer />
      <main className="main">
        <div className="w-[1200px] max-w-[95%] mx-auto">
          {loading && <Spinner />}
          <section>
            <h2 className="text-4xl text-center font-bold pb-10">
              Explorar por marca
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <ItemList arrayProducts={arrayProducts} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
