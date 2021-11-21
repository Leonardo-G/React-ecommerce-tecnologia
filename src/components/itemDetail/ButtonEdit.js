import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const ButtonEdit = ({ handleEdit, handleRemove }) => {
    return (
        <>
            <p className="description-quantity">Agregado</p>
            <div className="productModified">
                <button className="edit btn btn--add"
                        onClick={ handleEdit }
                >Editar</button>
                <button className="icon icon--delete"
                        onClick={ handleRemove }
                        title="Eliminar Producto"
                >
                    <FontAwesomeIcon icon={ faTrashAlt }/>
                </button>
            </div>
            <Link
                className="btn btn--add"
                to="/cart"
            >
                Finalizar Compra
            </Link>
        </>
    )
}
