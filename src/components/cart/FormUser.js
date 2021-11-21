import React from 'react'

export const FormUser = ({ handleChangeInputs }) => {
    return (
        <form className="order__form">
            <input 
                type="text"
                placeholder="Escribe tu Nombre"
                name="nombre"
                onChange={ handleChangeInputs }
            />
            <input 
                type="email"
                placeholder="Escribe tu Correo"
                name="email"
                onChange={ handleChangeInputs }
            />
            <input 
                type="number"
                placeholder="Escribe tu Teléfono"
                name="telefono"
                onChange={ handleChangeInputs }
            />
        </form>
    )
}
