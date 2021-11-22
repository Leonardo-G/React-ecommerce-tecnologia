import React from 'react';
import { Link } from 'react-router-dom';

export const ImgHeader = () => {
    return (
        <div className="coverHeader">
            <img src="./assets/imagenes/smart-watch-821560_1920.jpg" alt="sad"/>
            <div className="textAbsolute">
                <h3>Encuentra el producto que estas buscando</h3>
                <button className="btn btn--ok">
                    <Link to="/busqueda">
                        Buscar
                    </Link>
                </button>
            </div>
        </div>
    )
}
