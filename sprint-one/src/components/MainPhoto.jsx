import React from 'react';

const MainPhoto = (props) => {
    return (
        <div key={props.video.id}>
            <img src={props.video.image} alt="" style={{ height: '30rem' }} />
            <div>0:00/{props.video.duration}</div>
        </div>
    );
};
    
export default MainPhoto;