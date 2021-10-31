import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ItemCount } from './ItemCount'
import { ItemDetailImg } from './ItemDetailImg';
import { DetailDescription } from '../producto/DetailDescription';


export const ItemDetail = ({modelo, imgs, descripcion, precio, especificaciones}) => {

    const [showDescription, setShowDescription] = useState(false)

    const handleShowDescription = () => {
        if(!showDescription){
            setShowDescription(true)
        }else{
            setShowDescription(false)
        }
    }

    return (
            <div className="itemDetail">
                <div className="itemDetail__imgs">
                    {
                        imgs.map( (img, idx) => (
                            <ItemDetailImg key={ idx } img={ img }/>
                        ))
                    }
                </div>
                <div className="itemDetail__description">
                    <h1>{ modelo }</h1>
                    <p> $ {  Number(precio).toFixed(2) }</p>
                    <p>{ descripcion }</p>
                    {
                        <ItemCount />
                    }
                    <div className="description-button"
                         onClick={handleShowDescription}
                    >
                        <p>Especificaciones</p>
                        <FontAwesomeIcon icon={ faPlus }/>
                    </div>
                    <div className={showDescription ? "description-false" : "description-true"}>
                        {
                            <DetailDescription {...especificaciones}/>
                        }
                    </div>
                </div>
            </div>
    )
}
