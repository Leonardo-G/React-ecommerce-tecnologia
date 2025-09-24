import React from "react";
import "./HeaderContainer.scss";
import Image from "next/image";

export const HeaderContainer = () => {
  return (
    <section>
      <div className="w-full h-[400px] bg-black overflow-hidden relative">
        <Image
          src="/assets/imagenes/slider-1.jpg"
          alt="portada"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute text-white max-w-3xl w-full top-1/2 left-1/2 -translate-1/2 text-center">
          <p className="text-7xl font-bold">Encuentra tu estilo</p>
          <p className="mt-5 text-2xl">
            Explora nuestra coleccion de tecnología de punta. Diseños
            innovadores y la última tecnología para completar tu vida.
          </p>
        </div>
      </div>
    </section>
  );
};
