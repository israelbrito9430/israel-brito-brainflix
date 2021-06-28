import React from 'react';
import './MediaList.scss'
import { Link } from "react-router-dom";


const MediaList = (props) => {
    return (
        props.data && props.data.map(video => (
            <Link to={`/home/${video.id}`} className="suggestions__box" key={video.id} >
                <img className="suggestions__box__video" src={video.image} alt="Video suggest" />
                <div className="suggestions__box__info">
                    <p className="suggestions__box__info__name" >{video.title}</p>
                    <p className="suggestions__box__info__author" >{video.channel}</p>
                </div>
            </Link>
        ))
    );
};

export default MediaList;