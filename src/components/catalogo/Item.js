import React, { useEffect, useState } from 'react'
import catalogo from "../../data/catalogo.json";
import { useParams } from 'react-router'
import { useConsultApi } from '../../hooks/useConsultApi';
import { ItemProduct } from './ItemProduct';
import { ButtonBack } from '../UI/ButtonBack';
import { Spinner } from '../UI/Spinner';

export const Item = () => {

    const {id: idParam} = useParams();
    
    const [arrayProducts, setArrayProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const consultJSON = useConsultApi(catalogo);

    useEffect(() => {
        consultJSON
            .then(resp => {
                const result = resp.productos.filter( r => r.marca === idParam)
                setArrayProducts([...result]);
            })
            .finally(fin => setLoading(false));

        // eslint-disable-next-line
    }, [idParam]);

    return (
        <main className="main">
            <div className="container">
                <ButtonBack />
                {   loading &&
                    <Spinner />
                }
                <div className="gridMain">
                    {
                        arrayProducts.map( product => (
                            <ItemProduct key={ product.id} { ...product }/>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}
