import React from 'react';

export const CarrouselHeader = () => {

    return (
        <div className="carouselAbsolute">
            <div id="carouselExampleCaptions" className="carousel slide coverHeader" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./assets/imagenes/slider-1.jpg" className="d-block w-100 coverHeader" alt="tecnologia slider 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/imagenes/slider-2.jpg" className="d-block w-100 coverHeader" alt="tecnologia slider 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/imagenes/slider-3.jpg" className="d-block w-100 coverHeader" alt="tecnologia slider 1" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="carouselText">
                <h3>Consigue los mejores productos en nuestra web</h3>
            </div>
        </div>
    )
}
