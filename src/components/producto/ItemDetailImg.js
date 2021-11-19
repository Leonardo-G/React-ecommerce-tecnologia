import React from 'react'

export const ItemDetailImg = ({ id, img, modelo, handleZoomImage }) => {
    
    return (
        <div 
            className="description-zoom"
            onClick={ () => handleZoomImage( id )}
        >
            <img src={ `../${img}` } alt={ modelo } />
        </div>
    )
}
