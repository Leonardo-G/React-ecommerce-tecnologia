import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ItemCount } from '../catalogo/ItemCount'
import { ItemDetailImg } from './ItemDetailImg';
import { DetailDescription } from './DetailDescription';


export const ItemDetail = ({modelo, imgs, stock, descripcion, precio, especificaciones}) => {

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
                    <p className="description-price"> $ {  Number(precio).toFixed(2) }</p>
                    <p>{ descripcion }</p>
                    {
                        <ItemCount stock={ stock }/>
                    }
                    <div className="description-button"
                         onClick={handleShowDescription}
                    >
                        <p>Especificaciones</p>
                        <FontAwesomeIcon className="icon-rotate" icon={ faPlus }/>
                    </div>
                    <div className={!showDescription ? "description-false" : "description-true"}>
                        {
                            <DetailDescription {...especificaciones}/>
                        }
                    </div>
                </div>
            </div>
    )
}
