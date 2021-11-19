import React from 'react'

export const InputsMarcas = ({ showInputs, handleInputsChange }) => {

    return (
        <div className={`inputsCheck ${showInputs && "visible"}`}>
            <label>
                <input 
                    type="radio"
                    value=""
                    name="marca"
                    onChange={ handleInputsChange }
                />  Todos
            </label>
            <label>
                <input 
                    type="radio"
                    value="LG"
                    name="marca"
                    onChange={ handleInputsChange }
                />  LG
            </label>
            <label>
                <input 
                    type="radio"
                    value="Motorola"
                    name="marca"
                    onChange={ handleInputsChange }
                />  Motorola
            </label>
            <label>
                <input 
                    type="radio"
                    value="Huawei"
                    name="marca"
                    onChange={ handleInputsChange }
                />  Huawei
            </label>
            <label>
                <input 
                    type="radio"
                    value="Apple"
                    name="marca"
                    onChange={ handleInputsChange }
                />  Apple
            </label>
            <label>
                <input 
                    type="radio"
                    value="Samsung"
                    name="marca"
                    onChange={ handleInputsChange }
                />  Samsung
            </label>
            <label>
                <input 
                    type="radio"
                    value="Otros"
                    name="marca"
                    onChange={ handleInputsChange }
                />  Otros
            </label>
        </div>
    )
}
