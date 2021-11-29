import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import "./Navegacion.scss"

export const Navegacion = () => {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    const handleCloseMenu = () => {
        setMenu(false);
    }

    return (
        <header>
            <nav className="navegacion">
                <div className="navegacion__logo">
                    <Link to="/" onClick={ handleCloseMenu }>X Tecnol</Link>
                </div>
                <div className={`navegacion__enlaces ${menu && "menuActive"}`}>
                    <Link to="/" onClick={ handleCloseMenu }>Inicio</Link>
                        <ul className="">
                            <li className="relativeNav"> <p>Marcas</p> 
                                <ul className="enlaceOculto">
                                    <div className="overflowBox">
                                        <li><Link to="/category/LG" onClick={ handleCloseMenu }>LG</Link></li>
                                        <li><Link to="/category/Apple" onClick={ handleCloseMenu }>Apple</Link></li>
                                        <li><Link to="/category/Samsung" onClick={ handleCloseMenu }>Samsung</Link></li>
                                        <li><Link to="/category/Motorola" onClick={ handleCloseMenu }>Motorola</Link></li>
                                        <li><Link to="/category/Huawei" onClick={ handleCloseMenu }>Huawei</Link></li>
                                        <li><Link to="/category/Otros" onClick={ handleCloseMenu }>Otros</Link></li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    <Link to="/busqueda" onClick={ handleCloseMenu }>Buscar</Link>
                </div>
                <CartWidget handleCloseMenu={ handleCloseMenu }/>
                <div 
                    className="navegacion__menu"
                    onClick={ handleMenu }    
                >
                    <FontAwesomeIcon icon={ faBars }/>
                </div>
            </nav>
        </header>
    )
}
