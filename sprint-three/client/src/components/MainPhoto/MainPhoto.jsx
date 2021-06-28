import React from 'react';
import './MainPhoto.scss'

const MainPhoto = (props) => {
    return (
        <div className="MainPhoto" key={props.video.id}>
            <img className="MainPhoto__pic" src={props.video.image} alt="Current video" />
            <p className="MainPhoto__timer">0:00/{props.video.duration}</p>
        </div>
    );
};

export default MainPhoto;