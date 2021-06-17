import React from 'react';
import './MediaList.scss'
import {Link} from "react-router-dom";
const MediaList = (props) => {
    return (
        props.data && props.data.map(video => (
            <Link to={`/${video.id}`}  className="suggestions__box" key={video.id} >
                <img className="suggestions__box--video" src={video.image} alt="" style={{ width: '60px', height: '50px' }} />
                <div className="suggestions__box__info">
                    <div className="suggestions__box__info--name" >{video.title}</div>
                    <div className="suggestions__box__info--author" >{video.channel}</div>
                </div>
            </Link>
        ))
    );
};
export default MediaList;