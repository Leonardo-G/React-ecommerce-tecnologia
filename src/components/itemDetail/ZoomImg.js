"use client"

import React from "react";
import "./ZoomImg.scss";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const ZoomImg = ({ imgShow, setImgShow, idxImg, setIdxImg }) => {
  const handleCloseZoom = () => {
    setImgShow({
      ...imgShow,
      imgZoom: "",
      show: false,
    });
  };

  const handleNextImg = () => {
    if (idxImg >= imgShow.lengthImg - 1) return;

    setIdxImg(idxImg + 1);
  };

  const handlePreviousImg = () => {
    if (idxImg === 0) return;

    setIdxImg(idxImg - 1);
  };

  return (
    <div className="zoom relative z-99">
      <div className="absolute top-[2%] right-[2%] border p-2 border-gray-400 rounded-full cursor-pointer hover:scale-103 duration-300 transition-all" onClick={handleCloseZoom}>
        <X />
      </div>
      {idxImg !== 0 && (
        <div className="absolute top-1/2 -translate-y-1/2 left-[2%] border p-2 border-gray-400 rounded-full cursor-pointer hover:scale-103 duration-300 transition-all" onClick={handlePreviousImg}>
          <ChevronLeft/>
        </div>
      )}
      <div className="zoom__container">
        <img src={`${imgShow.imgZoom}`} alt="texto" />
      </div>
      {idxImg < imgShow.lengthImg - 1 && (
        <div className="absolute top-1/2 -translate-y-1/2 right-[2%] border p-2 border-gray-400 rounded-full cursor-pointer hover:scale-103 duration-300 transition-all" onClick={handleNextImg}>
          <ChevronRight />
        </div>
      )}
    </div>
  );
};
