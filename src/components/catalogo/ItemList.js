import React from 'react';
import { Item } from './Item';

export const ItemList = ({ arrayProducts }) => {
    
    return (
        <>
            {
                arrayProducts.map( product => (
                    <Item key={ product.id } img={product.imgs[0]} { ...product }/>
                ))
            }
        </>
    )
}
