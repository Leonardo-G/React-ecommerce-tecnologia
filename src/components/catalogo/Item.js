import React from 'react'

export const Item = ({ id, modelo, imgs, handleShowDetailProduct }) => {

    return (
        <div className="main__productos">
            <img src={imgs[0]} alt={id}/>
            <div className="marca">
                <h3 className="marca__modelo">{modelo}</h3>
                <button 
                    className="btn btn--marca"
                    onClick={ () => handleShowDetailProduct(id) }
                >Ver Producto</button>
            </div>
        </div>
    )
}
