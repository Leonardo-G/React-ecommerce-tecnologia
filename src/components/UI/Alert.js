import React from 'react';
import "./Alert.scss"

export const Alert = ({ showAlert }) => {
    return (
        <div className={`alert ${showAlert && "visible"}`}>
            <p>Producto agregado al carrito, finalice la compra para ver todos los productos</p>
        </div>
    )
}
