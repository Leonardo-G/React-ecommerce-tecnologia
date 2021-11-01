import React from 'react'

export const DetailDescription = ({dimensiones, material, pantalla, procesador}) => {
    return (
        <div>
            <p><span>Dimensiones: </span>{ dimensiones }</p>
            <p><span>Material: </span>{ material }</p>
            <p><span>Pantalla: </span>{ pantalla }</p>
            <p><span>Procesador: </span>{ procesador }</p>
        </div>
    )
}
