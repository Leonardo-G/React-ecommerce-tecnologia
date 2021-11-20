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
                        <ul className="">
                            <li className="relativeNav"> Marcas 
                                <ul className="enlaceOculto">
                                    <div className="overflowBox">
                                        <li>
                                            <Link to="/category/LG">LG</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Apple">Apple</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Samsung">Samsung</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Motorola">Motorola</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Huawei">Huawei</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Otros">Otros</Link>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    <Link to="/busqueda">Buscar</Link>
                </div>
                
                <CartWidget />
            </nav>
        </header>
    )
}
