import React from 'react'

export const Item = ({ id, modelo, img }) => {

    const handleShowInfo = () => {
        console.log("Pronto se mostrara el producto ")
    }

    return (
        <div className="main__productos">
                    <img src={img} alt={id}/>
                    <div className="marca">
                        <h3 className="marca__modelo">{modelo}</h3>
                        <button 
                            className="btn btn--marca"
                            onClick={ e => handleShowInfo() }
                        >Ver Producto</button>
                    </div>
                </div>
    )
}
