import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./ZoomImg.scss"

export const ZoomImg = ({ imgShow, setImgShow, idxImg, setIdxImg }) => {
    
    const handleCloseZoom = () => {
        setImgShow({
            ...imgShow,
            imgZoom: "",
            show: false
        })
    }

    const handleNextImg = () => {
        if( idxImg >= (imgShow.lengthImg - 1) ) return;

        setIdxImg( idxImg + 1);
    }

    const handlePreviousImg = () => {
        if( idxImg === 0 ) return;

        setIdxImg( idxImg - 1)
    }

    return (
        <div className="zoom">
            <div 
                className="zoom__icon icon--close"
                onClick={ handleCloseZoom }    
            >
                <FontAwesomeIcon icon={ faTimes }/>
            </div>
            {
                idxImg !== 0 &&

                <div 
                    className="zoom__icon icon--previous"
                    onClick={ handlePreviousImg }    
                >
                    <FontAwesomeIcon icon={ faChevronCircleLeft }/>
                </div>
            }
            
            <div className="zoom__container">
                <img src={ `${imgShow.imgZoom}` } alt=""/>
            </div>

            {
                idxImg < (imgShow.lengthImg - 1) &&

                <div 
                    className="zoom__icon icon--next"
                    onClick={ handleNextImg }    
                >
                    <FontAwesomeIcon icon={ faChevronCircleRight }/>
                </div>
            }
        </div>
    )
}
