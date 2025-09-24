import React, { Suspense } from "react";
import { Spinner } from "../UI/Spinner";
import { Item } from "./Item";

export const ItemList = ({ arrayProducts }) => {
  return (
    <Suspense fallback={<Spinner />}>
      {arrayProducts.map((product) => (
        <Item key={product.id} img={product.imgs[0]} {...product} />
      ))}
    </Suspense>
  );
};
