import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductsFilter } from './ProductsFilter';
import { Spinner } from '../UI/Spinner';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { InputsMarcas } from './InputsMarcas';
import { InputsOptions } from './InputsOptions';
import "./SearchContainer.scss"

export const SearchContainer = ({ history }) => {

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
                            <InputsOptions handleInputsChange={ handleInputsChange }/>
                            <div 
                                className="showInputs"
                                onClick={ handleShowInputs }
                            >
                                <h2>Marcas</h2>
                                <FontAwesomeIcon className={`icon--hidden ${showInputs && "icon--show"}`} icon={ faCaretUp }/>
                            </div>
                            <div className="formulario__inputs">
                                <InputsMarcas showInputs= { showInputs } handleInputsChange={ handleInputsChange }/>
                            </div>
                        </form>
                    </aside>
                    <main>
                        <ProductsFilter inputsValues={ inputsValues } setLoading={ setLoading }/>
                    </main>
                </div>
            </div>
        </div>
    )
}
