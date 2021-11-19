import React from 'react'

export const InputsOptions = ({ handleInputsChange }) => {
    return (
        <>
            <input 
                className="formulario__campo"
                placeholder="Buscar Producto"
                type="search"
                name="search"
                onChange={ handleInputsChange }
                />
            <div className="formulario__minmax">
                <input 
                    type="number"
                    placeholder="Min"
                    name="min"
                    onChange={ handleInputsChange }
                />
                <input 
                    type="number"
                    placeholder="Max"
                    name="max"
                    onChange={ handleInputsChange }
                />
        </div>
        </>
    )
}
