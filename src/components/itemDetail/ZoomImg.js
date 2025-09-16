"use client"

import React from "react";
import "./ZoomImg.scss";
import { CircleArrowRight, CircleChevronLeft, X } from "lucide-react";

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
    <div className="zoom">
      <div className="zoom__icon icon--close" onClick={handleCloseZoom}>
        <X />
      </div>
      {idxImg !== 0 && (
        <div className="zoom__icon icon--previous" onClick={handlePreviousImg}>
          <CircleChevronLeft />
        </div>
      )}
      <div className="zoom__container">
        <img src={`${imgShow.imgZoom}`} alt="texto" />
      </div>
      {idxImg < imgShow.lengthImg - 1 && (
        <div className="zoom__icon icon--next" onClick={handleNextImg}>
          <CircleArrowRight />
        </div>
      )}
    </div>
  );
};
