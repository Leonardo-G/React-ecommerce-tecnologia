import React, { useState } from 'react'
import { ItemSearchContainer } from './ItemSearchContainer';
import catalogo from "../../data/catalogo.json";

export const Search = () => {

    const [inputsValues, setInputsValues] = useState({
        search: ""
    })

    const handleSearhProduct = (e) => {
        setInputsValues({
            ...inputsValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="main">
            <div className="container search">
                <aside>
                    <form>
                        <input 
                            type="search"
                            name="search"
                            onChange={ handleSearhProduct }
                        />
                    </form>
                </aside>
                <main className="gridMain">
                    <ItemSearchContainer inputsValues={ inputsValues }/>
                </main>
            </div>
        </div>
    )
}
