import React from 'react';

const MediaList = (props) => {
    return (
        props.data && props.data.map(video => (
            <div key={video.id} onClick={() => props.click(video)}>
                <img src={video.image} alt="" style={{ width: '60px', height: '50px' }} />
                <div>
                    <div>{video.title}</div>
                    <div>{video.channel}</div>
                </div>
            </div>
        ))
    );
};
export default MediaList;