import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ItemCount } from '../catalogo/ItemCount'
import { ItemDetailImg } from './ItemDetailImg';
import { DetailDescription } from './DetailDescription';
import { ZoomImg } from './ZoomImg';
import { CartContext } from '../context/CartContext';


export const ItemDetail = ({id, modelo, imgs, stock, descripcion, precio, especificaciones}) => {
    
    const { cart, setCart } = useContext( CartContext )
    const [idxImg, setIdxImg] = useState(0)
    const [showButtonAdd, setShowButtonAdd] = useState(false)
    const [imgShow, setImgShow] = useState({
        lengthImg: imgs.length,
        imgZoom: "",
        show: false
    })

    const [showDescription, setShowDescription] = useState(false)

    const handleShowDescription = () => {
        if(!showDescription){
            setShowDescription(true)
        }else{
            setShowDescription(false)
        }
    }

    const handleZoomImage = (id) => {
        setIdxImg(parseInt(id));
        setImgShow({...imgShow, show:true})
    }
    
    const showButton = () => {
        const probar = cart.some( c => c.id === id);
        setShowButtonAdd(probar)
    }

    useEffect(() => {
        showButton();
    }, [cart])


    
    useEffect(() => {
        if(imgShow.show){
            const src = imgs.find((img, idx) => idx === idxImg);
            setImgShow({...imgShow, imgZoom: src})
        }

    }, [idxImg, imgShow.show]);



    const handleAddProduct = ( quantity ) => {
        setCart(cart => [...cart, {
            id,
            modelo,
            quantity,
            precio,
            imgs: imgs[0]
        }])
    }

    return (
        <>
            <div className="itemDetail">
                <div className="itemDetail__imgs">
                    {
                        imgs.map( (img, idx) => (
                            <ItemDetailImg key={ idx } id={ idx } img={ img } handleZoomImage={ handleZoomImage }/>
                        ))
                    }
                </div>
                <div className="itemDetail__description">
                    <h1>{ modelo }</h1>
                    <p className="description-price"> $ {  Number(precio).toFixed(2) } ARS</p>
                    <p>{ descripcion }</p>

                    <ItemCount stock={ stock } handleAddProduct={ handleAddProduct } showButtonAdd={ showButtonAdd } />
                    
                    <div className="description-button"
                         onClick={handleShowDescription}
                    >
                        <p>Especificaciones</p>
                        <FontAwesomeIcon className="icon-rotate" icon={ faPlus }/>
                    </div>
                    <div className="description--info">
                        <div className={!showDescription ? "description-false" : "description-true"}>
                            {
                                <DetailDescription {...especificaciones}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {   
                imgShow.show &&
                <ZoomImg imgShow={ imgShow } setImgShow={ setImgShow } idxImg={ idxImg } setIdxImg={ setIdxImg }/>
            }
        </>
    )
}
