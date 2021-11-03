import React, { useState } from 'react'
import { ItemSearchContainer } from './ItemSearchContainer';
import { Spinner } from '../UI/Spinner';

export const Search = () => {

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

    return (
        <div className="main">
            <div className="container">
                {   loading &&
                    <Spinner />
                }
                <div className="search">
                    <aside>
                        <form>
                            <input 
                                type="search"
                                name="search"
                                onChange={ handleSearhProduct }
                                />
                            <div>Proximamente mas filtros</div>
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
