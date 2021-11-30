import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ItemDetailImg = ({ id, img, modelo, handleZoomImage }) => {
    
    return (
        <div 
            className="description-zoom"
            onClick={ () => handleZoomImage( id )}
        >
            <img src={ img } alt={ modelo } />
            <div className="hover--sombra">
                <FontAwesomeIcon className="icon--search" icon={ faSearchPlus }/>
            </div>
        </div>
    )
}
