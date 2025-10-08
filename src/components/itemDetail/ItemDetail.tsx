"use client"

import React, { useContext, useEffect, useState } from 'react'

import "./ItemDetail.scss"
import { ItemCount } from '../UI/ItemCount'
import { DetailDescription } from './DetailDescription';
import { ZoomImg } from './ZoomImg';
import { Alert } from '../UI/Alert';
import { ButtonEdit } from './ButtonEdit';
import { Plus } from 'lucide-react';
import { CartContext } from '@/context/CartContext';
import { ItemDetailImg } from './ItemDetailImg';


export const ItemDetail = ({id, modelo, imgs, stock, descripcion, precio, especificaciones, stripe_price_id}: any) => {
    const { cart, addProduct, removeItem } = useContext( CartContext );
    const [idxImg, setIdxImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    //UI state
    const [showButtonAdd, setShowButtonAdd] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [buttonAvailable, ] = useState(true);
    
    const [imgShow, setImgShow] = useState({
        lengthImg: imgs.length,
        imgZoom: "",
        show: false
    });

    const handleShowDescription = () => {
        setShowDescription(!showDescription);
    }

    const handleZoomImage = (id) => {
        setIdxImg(parseInt(id));
        setImgShow({...imgShow, show:true, imgZoom: id});
    }
    
    //En caso de que el usuario haya agregado el producto, puede editarlo en el mismo ITEM
    const showButton = () => {
        const isExistProduct = cart.some( c => c.id === id);
        setShowButtonAdd(isExistProduct);
    }
    
    useEffect(() => {
        showButton();

        //Soluciona error cuando no desmontamos.
        return () => {
            showButton();
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
            imgs: imgs[0],
            stripe_price_id,
        };

        addProduct(id, objProduct);

        //Alerta al agregar Producto
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    }

    return (
        <>
            <div className="itemDetail flex flex-col md:grid grid-cols-[60%_40%] gap-10">
                <div className="grid grid-cols-2 gap-5 lg:h-fit min-h-lg">
                    {
                        imgs.map( (img, idx) => (
                            <ItemDetailImg key={ idx } id={ idx } img={ img } modelo={ modelo } handleZoomImage={ handleZoomImage }/>
                        ))
                    }
                </div>
                <div className="itemDetail__description">
                    <h1>{ modelo }</h1>
                    <p className="description-price"> $ {  Number((precio / 100)).toFixed(2) }</p>
                    <p>{ descripcion }</p>
                    {
                        stock === 0 || stock < 0
                        ? <p>Por el momento no tenemos Stock del producto.</p>
                        :
                            showButtonAdd 
                            ?   <ButtonEdit handleEdit={ handleEdit } handleRemove={ handleRemove }/>
                            :   <ItemCount stock={ stock } handleAddProduct={ handleAddProduct } buttonAvailable={ buttonAvailable } quantity={ quantity} setQuantity={ setQuantity }/>
                    }
                    
                    <div className="description-button"
                         onClick={ handleShowDescription }
                    >
                        <p>Especificaciones</p>
                        <Plus />
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
