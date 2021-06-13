import React from 'react';
import './MediaCard.scss'
const MediaCard = (props) => {
        
    return (
        <div key={props.video.id} style={{display: 'flex', flexDirection: 'column' }}>
            <div>{props.video.title}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <div>By {props.video.channel}</div>
                    <div>12/18/2018</div>
                </div>
                <div>
                    icon
                    <div>{props.video.views}</div>
                </div>
                <div>
                    icon
                    <div>{props.video.likes}</div>
                </div>
            </div>
            <hr style={{ backgroundColor: 'gray', width: '100%' }} />
            <div>{props.video.description}</div>
        </div>
    );
};
    
export default MediaCard;