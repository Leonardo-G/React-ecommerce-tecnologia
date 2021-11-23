import React, { useEffect, useState } from 'react'
import { getDocumentById } from '../../helpers/getDocumets'

export const Orden = () => {

    const [order, setOrder] = useState({})

    useEffect(() => {
        getDocumentById("9ZaDxQ0b8Uy0iejW7GO3", "orders")
            .then(resp => {
                setOrder(resp)
            })
    }, [])

    return (
        <div>
            
        </div>
    )
}
