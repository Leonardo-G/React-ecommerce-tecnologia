import Image from "next/image";
import React from "react";

export const ItemDetailImg = ({ id, img, modelo, handleZoomImage }) => {
  return (
    <div onClick={() => handleZoomImage(id)} className="relative rounded-xl overflow-hidden h-[200px] lg:aspect-square hover:scale-103 hover:shadow-xl transition-all duration-300 cursor-pointer">
      <Image src={img} alt={modelo} className="object-cover select-none" fill/>
    </div>
  );
};
