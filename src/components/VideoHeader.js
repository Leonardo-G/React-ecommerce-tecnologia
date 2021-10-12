import React from 'react';
import video from "../assets/imagenes/videoplayback-recortado (1).mp4"

export const VideoHeader = () => {
    return (
        <video src={video} autoPlay loop muted></video>
    )
}
