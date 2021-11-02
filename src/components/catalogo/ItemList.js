import React from 'react'
import { Link } from 'react-router-dom';

export const ItemList = ({id, descripcion, img, showProducts}) => {
    
    return (
        <>
            {  !showProducts.show && 
                <div className="main__marca">
                    <img src={img} alt={id}/>
                    <div className="empresa">
                        <h3 className="empresa__marca">{id}</h3>
                        <Link 
                            to={`/category/${id}`}
                            className="btn btn--marca"
                        >Ver Productos</Link>
                        <p className="empresa__info">{descripcion}</p>
                        
                    </div>
                </div>
            }
        </>
    )
}
