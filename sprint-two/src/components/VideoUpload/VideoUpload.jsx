import React from 'react';
import upload from './videoUpload.scss';

function VideoUpload() {

    return (
        <div className="uploadVideo">
            <div>
                <h1 className="uploadVideo__title">Upload Video</h1>
            </div>
            <div>
                <div>
                    <p className="uploadVideo__subtitle">VIDEO THUMBNAIL</p>
                    <img className="uploadVideo__video" src="../" alt="Video title" />
                </div>
                <div className="uploadVideo__form">
                    <span className="uploadVideo__form__title">TITLE YOUR VIDEO</span>
                    <textarea className="uploadVideo__form__input" type="text" placeholder="Add a title to your video" />

                    <span className="uploadVideo__form__title">ADD A VIDEO DESCRIPTION</span>
                    <textarea type="text" placeholder="Add a description of your video" />
                </div>
            </div>
            <div className="uploadVideo__buttons">
                <button className="uploadVideo__buttons__publish">PUBLISH</button>
                <button className="uploadVideo__buttons__cancel">CANCEL</button>
            </div>
        </div >
    )
}

export default VideoUpload;
