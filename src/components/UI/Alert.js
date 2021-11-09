import React from 'react'

export const Alert = ({ showAlert }) => {
    return (
        <div className={`alert ${showAlert && "visible"}`}>
            <p>Producto agregado al carrito, finalice la compra para ver todos los productos</p>
        </div>
    )
}
