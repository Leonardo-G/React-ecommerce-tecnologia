import React from 'react'

export const DetailDescription = ({pantalla, dimensiones, procesador, ram, almacenamiento, camaraFontral, camaraTrasera, bateria, sistemaOperativo, conectividad, otros}) => {
    return (
        <div>
            <p><span>Pantalla: </span>{ pantalla }</p>
            <p><span>Dimensiones: </span>{ dimensiones }</p>
            <p><span>Procesador: </span>{ procesador }</p>
            <p><span>RAM: </span>{ ram }</p>
            <p><span>Almacenamiento: </span>{ almacenamiento }</p>
            <p><span>Camara Frontal: </span>{ camaraFontral }</p>
            <p><span>Camara Trasera: </span>{ camaraTrasera }</p>
            <p><span>Batería: </span>{ bateria }</p>
            <p><span>Sistema Operativo: </span>{ sistemaOperativo }</p>
            <p><span>Conectividad: </span>{ conectividad }</p>
            <p><span>Otros: </span>{ otros }</p>
        </div>
    )
}
