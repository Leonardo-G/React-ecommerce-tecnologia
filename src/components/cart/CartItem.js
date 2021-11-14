import React from 'react'
import { ItemCount } from '../catalogo/ItemCount';

export const CartItem = ({ id, imgs, modelo, precio, descripcion, quantity, stock }) => {
    
    const lengthDesc = descripcion.slice(0, 70);

    return (
        <div className="cart__item">
            <img src={ imgs } alt={ modelo }/>
            <div className="item--info">
                <h2 className="itemTitle">{ modelo }</h2>
                <p className="itemDesc"><strong className="itemPrice"> $ { Number(precio).toFixed(2) } </strong> | { lengthDesc }...</p>
            </div>
            <div>
                <ItemCount stock={ stock }/>
            </div>
            <div>
                X
            </div>
        </div>
    )
}
