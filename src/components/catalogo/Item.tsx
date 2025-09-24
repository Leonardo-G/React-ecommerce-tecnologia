import React from "react";
import "./Item.scss";
import Link from "next/link";
import Image from "next/image";

export const Item = ({ id, img, modelo, marca }) => {
  return (
    <Link className="rounded-xl h-90 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-102" href={modelo ? `/item/${id}` : `/item/${marca}`}>
      <div className="relative w-full h-full">
        <Image src={img} alt={modelo} fill className="object-cover brightness-70" />
        <p className="absolute text-white text-4xl font-bold top-1/2 left-1/2 -translate-1/2">{modelo ? modelo : marca}</p>
      </div>
    </Link>
  );
};
