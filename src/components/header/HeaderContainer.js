import React from 'react';
import { CarrouselHeader } from './CarrouselHeader';
import { ImgHeader } from './ImgHeader';
import { VideoHeader } from './VideoHeader';
import "./HeaderContainer.scss"

export const HeaderContainer = () => {
    
    return (
        <section>
            <div className="header__img">
                <div>
                    <CarrouselHeader />
                    <ImgHeader />
                </div>
                <VideoHeader />
            </div>    
        </section>
    )
}
