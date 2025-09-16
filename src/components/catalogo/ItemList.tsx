import React, { Suspense } from "react";
import { Item } from "./Item";
import { Spinner } from "../UI/Spinner";

export const ItemList = ({ arrayProducts }) => {
  return (
    <Suspense fallback={<Spinner />}>
      {arrayProducts.map((product) => (
        <Item key={product.id} img={product.imgs[0]} {...product} />
      ))}
    </Suspense>
  );
};
