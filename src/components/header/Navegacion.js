import React from 'react';
import { CartWidget } from './CartWidget';

export const Navegacion = () => {
    return (
        <nav className="navegacion">
            <div className="navegacion__logo">
                <a href="?#">X Tecnol</a>
            </div>
            <div className="navegacion__enlaces">
                <a href="?#">Enlace</a>
                <a href="?#">Enlace</a>
                <a href="?#">Enlace</a>
            </div>
            
            <CartWidget />
        </nav>
    )
}
