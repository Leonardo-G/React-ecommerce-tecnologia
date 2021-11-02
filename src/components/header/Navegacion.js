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
                    <Link to="/">Inicio</Link>
                    <a href="?#">Enlace</a>
                    <Link to="/busqueda">Buscar</Link>
                </div>
                
                <CartWidget />
            </nav>
        </header>
    )
}
