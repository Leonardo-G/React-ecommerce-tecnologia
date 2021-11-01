import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const Navegacion = () => {
    return (
        <header>
            <nav className="navegacion">
                <div className="navegacion__logo">
                    <Link to="/">X Tecnol</Link>
                </div>
                <div className="navegacion__enlaces">
                    <a href="?#">Enlace</a>
                    <a href="?#">Enlace</a>
                    <a href="?#">Enlace</a>
                </div>
                
                <CartWidget />
            </nav>
        </header>
    )
}
