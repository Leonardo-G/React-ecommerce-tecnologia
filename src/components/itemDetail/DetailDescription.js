import React from 'react'

export const DetailDescription = ({tipo, pantalla, dimensionesPeso, procesador, ram, almacenamiento, camaraFontral, camaraTrasera, bateria, sistemaOperativo, conectividad, otros}) => {
    return (
        <div className="description--info">
            <p><span>Pantalla: </span>{ pantalla }</p>
            <p><span>Dimensiones: </span>{ dimensionesPeso }</p>
            <p><span>Procesador: </span>{ procesador }</p>
            <p><span>RAM: </span>{ ram }</p>
            <p><span>Almacenamiento: </span>{ almacenamiento }</p>
            {
                tipo === "smartphone" &&
                (         
                    <>  
                        <p><span>Camara Frontal: </span>{ camaraFontral }</p>
                        <p><span>Camara Trasera: </span>{ camaraTrasera }</p>
                    </>
                )
            }
            <p><span>Batería: </span>{ bateria }</p>
            <p><span>Sistema Operativo: </span>{ sistemaOperativo }</p>
            <p><span>Conectividad: </span>{ conectividad }</p>
            <p><span>Otros: </span>{ otros }</p>
        </div>
    )
}
