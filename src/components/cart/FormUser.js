import React from 'react'

export const FormUser = () => {
    return (
        <form className="formOrder">
            <input 
                type="text"
                placeholder="Escribe tu Nombre"
                name="nombre"

            />
            <input 
                type="email"
                placeholder="Escribe tu Correo"
                name="email"
            />
            <input 
                type="number"
                placeholder="Escribe tu Teléfono"
                name="telefono"
            />
        </form>
    )
}
