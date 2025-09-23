import Link from 'next/link';
import React from 'react';

export const VideoHeader = () => {
    return (
        <div className="video">
            <video src="./assets/imagenes/recortadofinal (1).mp4" autoPlay loop muted></video>
            <div className="video__relative">
                <h3>Puedes ver el estado de tu entrega</h3>
                    <Link className="btn btn--ok" href="/orders">
                        Aca!
                    </Link>
            </div>
        </div>
    )
}
