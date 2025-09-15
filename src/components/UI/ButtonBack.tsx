import React from "react";
import { useHistory } from "react-router";
import { ArrowBigLeft } from "lucide-react";

export const ButtonBack = () => {
  //Regresa hacia la pagina anteriores
  const { goBack } = useHistory();

  return (
    <div className="icon--back" onClick={() => goBack()}>
      <ArrowBigLeft />
      <p>Atrás</p>
    </div>
  );
};
