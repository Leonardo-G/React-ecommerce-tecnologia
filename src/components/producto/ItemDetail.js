import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import "./ItemDetail.scss"
import { ItemCount } from '../UI/ItemCount'
import { ItemDetailImg } from './ItemDetailImg';
import { DetailDescription } from './DetailDescription';
import { ZoomImg } from './ZoomImg';
import { CartContext } from '../../context/CartContext';
import { Alert } from '../UI/Alert';
import { ButtonEdit } from './ButtonEdit';


export const ItemDetail = ({id, modelo, imgs, stock, descripcion, precio, especificaciones}) => {
    
    const { cart, setCart, addProduct, removeItem } = useContext( CartContext )
    const [idxImg, setIdxImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    //UI state
    const [showButtonAdd, setShowButtonAdd] = useState(false)
    const [showDescription, setShowDescription] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [buttonAvailable, setButtonAvailable] = useState(true)
    
    const [imgShow, setImgShow] = useState({
        lengthImg: imgs.length,
        imgZoom: "",
        show: false
    })

    const handleShowDescription = () => {
        setShowDescription(!showDescription);
    }

    const handleZoomImage = (id) => {
        setIdxImg(parseInt(id));
        setImgShow({...imgShow, show:true});
    }
    
    const showButton = () => {
        const isExistProduct = cart.some( c => c.id === id);
        setShowButtonAdd(isExistProduct)
    }
    
    useEffect(() => {
        showButton();

        return () => {
            showButton()
        }
        //eslint-disable-next-line
    }, [cart])
    
    useEffect(() => {
        if(imgShow.show){
            const src = imgs.find((img, idx) => idx === idxImg);
            setImgShow({...imgShow, imgZoom: src})
        }
        //eslint-disable-next-line
    }, [idxImg, imgShow.show]);


    const handleEdit = () => {
        setShowButtonAdd(false);
    }

    const handleRemove = () => {
        removeItem(id)
        setShowButtonAdd(false);
    }

    const handleAddProduct = ( quantity ) => {
        
        const objProduct = {
            id,
            modelo,
            quantity,
            precio,
            descripcion,
            stock,
            imgs: imgs[0]
        };

        addProduct(id, objProduct);

        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    }

    return (
        <>
            <div className="itemDetail">
                <div className="itemDetail__imgs">
                    {
                        imgs.map( (img, idx) => (
                            <ItemDetailImg key={ idx } id={ idx } img={ img } modelo={ modelo } handleZoomImage={ handleZoomImage }/>
                        ))
                    }
                </div>
                <div className="itemDetail__description">
                    <h1>{ modelo }</h1>
                    <p className="description-price"> $ {  Number(precio).toFixed(2) } ARS</p>
                    <p>{ descripcion }</p>
                    {
                        showButtonAdd 
                        ?   <ButtonEdit handleEdit={ handleEdit } handleRemove={ handleRemove }/>
                        :   <ItemCount stock={ stock } handleAddProduct={ handleAddProduct } buttonAvailable={ buttonAvailable } quantity={ quantity} setQuantity={ setQuantity }/>
                    }
                    
                    <div className="description-button"
                         onClick={ handleShowDescription }
                    >
                        <p>Especificaciones</p>
                        <FontAwesomeIcon className="icon-rotate" icon={ faPlus }/>
                    </div>
                    <div className="description--info">
                        <div className={!showDescription ? "description-false" : "description-true"}>
                            {
                                <DetailDescription { ...especificaciones} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            {   
                imgShow.show &&
                <ZoomImg imgShow={ imgShow } setImgShow={ setImgShow } idxImg={ idxImg } setIdxImg={ setIdxImg }/>
            }
            {
                setShowAlert &&
                <Alert showAlert={ showAlert }/>
            }
        </>
    )
}
