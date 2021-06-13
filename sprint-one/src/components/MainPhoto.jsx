import React from 'react';
import './MainPhoto.scss'

const MainPhoto = (props) => {
    return (
        <div className="MainPhoto" key={props.video.id}>
            <img className="MainPhoto__pic" src={props.video.image} alt="" style={{ height: '30rem' }} />
            <div>0:00/{props.video.duration}</div>
        </div>
    );
};
    
export default MainPhoto;