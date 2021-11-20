import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonEdit = ({ handleEdit }) => {
    return (
        <>
            <p className="description-quantity">Agregado</p>
            <button className="btn btn--add"
                onClick={ handleEdit }>Editar</button>
            <Link
                className="btn btn--add"
                to="/cart"
            >
                Finalizar Compra
            </Link>
        </>
    )
}
