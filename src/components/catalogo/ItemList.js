import React from 'react'
import { Item } from './Item'

export const ItemList = ({id, descripcion, img, handleShowProduct, showProducts, productos}) => {
    
    return (
        <>
            {  !showProducts.show && 
                <div className="main__marca">
                    <img src={img} alt={id}/>
                    <div className="empresa">
                        <h3 className="empresa__marca">{id}</h3>
                        <button 
                            className="btn btn--marca"
                            onClick={ e => handleShowProduct(id) }
                        >Ver Productos</button>
                        <p className="empresa__info">{descripcion}</p>
                        
                    </div>
                </div>
            }

            { showProducts.brand !== "" &&        
                productos.map(producto => (
                    <Item key={producto.id} {...producto}/>
                ))
            }
        </>
    )
}
