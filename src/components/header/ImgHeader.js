import Link from 'next/link';
import React from 'react';

export const ImgHeader = () => {
    return (
        <div className="coverHeader">
            <img src="./assets/imagenes/smart-watch-821560_1920.jpg" alt="Portada imagen"/>
            <div className="textAbsolute">
                <h3>Encuentra el producto que estas buscando</h3>
                <button className="btn btn--ok">
                    <Link href="/busqueda">
                        Buscar
                    </Link>
                </button>
            </div>
        </div>
    )
}
