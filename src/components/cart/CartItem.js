import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { ItemCount } from '../UI/ItemCount';

export const CartItem = ({ removeItem, cart, setCart, ...propsItem }) => {
    
    const { id, imgs, modelo, precio, descripcion, quantity, stock } = propsItem;

    const lengthDesc = descripcion.slice(0, 35);
    const [quantityItem, setQuantityItem] = useState(quantity);

    useEffect(() => {
        const items = cart.filter(c => c.id !== id);
        setCart([...items, {
            ...propsItem,
            quantity: quantityItem
        }]);
        // eslint-disable-next-line
    }, [quantityItem]);

    return (
        <div className="cart__item">
            <img src={ imgs } alt={ modelo }/>
            <div className="item--info">
                <Link 
                    className="itemTitle"
                    to={`/item/${id}`}    
                >{ modelo }</Link>
                <p className="itemDesc"> { lengthDesc }... | <strong className="itemPrice"> $ { (Number(precio) * quantityItem).toFixed(2) } </strong></p>
            </div>
            <div className="item--buttons">
                <ItemCount stock={ stock } quantity={ quantityItem } setQuantity={ setQuantityItem }/>
            </div>
            <div 
                className="icon--remove"
                onClick={ () => removeItem(id) }    
            >
                <FontAwesomeIcon icon={ faWindowClose }/>
            </div>
        </div>
    )
}
