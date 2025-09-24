"use client";

import React from "react";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const ButtonBack = () => {
  //Regresa hacia la pagina anteriores
  const router = useRouter();

  return (
    <div className="icon--back" onClick={() => router.back()}>
      <ArrowBigLeft />
      <p>Atrás</p>
    </div>
  );
};
