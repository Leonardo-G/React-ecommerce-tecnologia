import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ItemSearchContainer } from './ItemSearchContainer';
import { Spinner } from '../UI/Spinner';
import { faArrowRight, faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons';

export const Search = () => {
    const [showInputs, setShowInputs] = useState(false)
    const [inputsValues, setInputsValues] = useState({
        search: ""
    })
    const [loading, setLoading] = useState(true);

    const handleSearhProduct = (e) => {
        setInputsValues({
            ...inputsValues,
            [e.target.name]: e.target.value
        })
    }

    const handleVEr = (e) => {
        console.log(e.target.value)
    }

    const handleShowInputs = () => {
        setShowInputs(!showInputs)
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
                                onChange={ handleSearhProduct }
                                />
                            <div className="formulario__minmax">
                                <input 
                                    type="text"
                                    placeholder="Min"
                                />
                                <input 
                                    type="text"
                                    placeholder="Max"
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
                                            type="checkbox"
                                            value="LG"
                                        />  LG
                                    </label>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Motorola"
                                        />  Motorola
                                    </label>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Hueawei"
                                        />  Hueawei
                                    </label>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Apple"
                                        />  Apple
                                    </label>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Samsung"
                                        />  Samsung
                                    </label>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Otros"
                                        />  Otros
                                    </label>
                                </div>
                            </div>
                        </form>
                    </aside>
                    <main className="gridMain">
                        <ItemSearchContainer inputsValues={ inputsValues } setLoading={ setLoading }/>
                    </main>
                </div>
            </div>
        </div>
    )
}
