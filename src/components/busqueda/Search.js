import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ItemSearchContainer } from './ItemSearchContainer';
import { Spinner } from '../UI/Spinner';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

export const Search = () => {

    const [showInputs, setShowInputs] = useState(false);
    const [inputsValues, setInputsValues] = useState({
        search: "",
        min: "0",
        max: "",
        marca: ""
    });
    const [loading, setLoading] = useState(true);

    const handleInputsChange = (e) => {
        setInputsValues({
            ...inputsValues,
            [e.target.name]: e.target.value
        });
    }

    const handleShowInputs = () => {
        setShowInputs(!showInputs);
    }


    return (
        <div className="main">
            <div className="container">
                {   
                    loading &&
                    <Spinner />
                }
                <div className="search">
                    <aside className="busqueda">
                        <form className="formulario">
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
                            <div 
                                className="showInputs"
                                onClick={ handleShowInputs }
                            >
                                <h2>Marcas</h2>
                                <FontAwesomeIcon className={`icon--hidden ${showInputs && "icon--show"}`} icon={ faCaretUp }/>
                            </div>
                            <div className="formulario__inputs">
                                <div className={`inputsCheck ${showInputs && "visible"}`}>
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
                                        />  Hueawei
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
                            </div>
                        </form>
                    </aside>
                    <main>
                        <ItemSearchContainer inputsValues={ inputsValues } setLoading={ setLoading }/>
                    </main>
                </div>
            </div>
        </div>
    )
}
