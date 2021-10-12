import React from 'react'
import { CarrouselHeader } from './CarrouselHeader'
import { ImgHeader } from './ImgHeader'
import { Navegacion } from './Navegacion'
import { VideoHeader } from './VideoHeader'

export const Header = () => {
    return (
        <header>
            <Navegacion />
            <div className="header__img">
                <div>
                    <CarrouselHeader />
                    <ImgHeader />
                </div>
                <VideoHeader />
            </div>
        </header>
    )
}
