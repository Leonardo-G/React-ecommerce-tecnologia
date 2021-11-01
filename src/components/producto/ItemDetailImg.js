import React from 'react'

export const ItemDetailImg = ({ id, img, handleZoomImage }) => {
    
    return (
        <div 
            className="description-zoom"
            onClick={() => handleZoomImage(id)}
        >
            <img src={ `../${img}` } alt= "" data-img={ id }/>
        </div>
    )
}
