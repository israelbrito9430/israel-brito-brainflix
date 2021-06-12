import React from 'react';

const MainPhoto = (props) => {
        
    return (
        <div>
            <img src={props.video.image} style={{ height: '30rem' }} />
            <div>0:00/{props.video.duration}</div>
        </div>
    );
};
    
export default MainPhoto;