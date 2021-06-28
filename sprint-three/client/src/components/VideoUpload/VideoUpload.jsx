import React from 'react';
import { withRouter } from "react-router-dom";

import './videoUpload.scss';
import videoImage from '../../assets/images/Upload-video-preview.jpg';

import { v4 as uuidv4 } from 'uuid';

import { UploadVideo } from "../../api/videoAPI";

class VideoUpload extends React.Component {

    constructor() {
        super();
        this.state = {
            form: {
                id: uuidv4(),
                image: videoImage,
                title: '',
                description: ''
            }
        }
    };

    handleTitleChange = (event) => {
        const newForm = this.state.form;
        newForm.title = event.target.value;
        this.setState({ form: newForm });
    };

    handleDescriptionChange = (event) => {
        const newForm = this.state.form;
        newForm.description = event.target.value;
        this.setState({ form: newForm });
    };

    handleClick = () => {
        // UploadVideo(this.state.form);
        this.props.history.push("home");
    };

    render() {
        return (
            <div className="uploadVideo">
                <div className="uploadVideo__container1">
                    <h1 className="uploadVideo__container1__title">Upload Video</h1>
                </div>
                <div className="uploadVideo__container2">
                    <div className="uploadVideo__container2__pic">
                        <p className="uploadVideo__container2__subtitle">VIDEO THUMBNAIL</p>
                        <img className="uploadVideo__container2__video" src={videoImage} alt="Video title" />
                    </div>
                    <div className="uploadVideo__container2__form">
                        <span>TITLE YOUR VIDEO</span>
                        <textarea 
                            className="uploadVideo__container2__form__input" 
                            type="text" 
                            placeholder="Add a title to your video"
                            onChange={e => this.handleTitleChange(e)}
                        />

                        <span>ADD A VIDEO DESCRIPTION</span>
                        <textarea 
                            className="uploadVideo__container2__form__input2" 
                            type="text" 
                            placeholder="Add a description of your video" 
                            onChange={e => this.handleDescriptionChange(e)}
                        />
                    </div>
                </div>
                <div className="uploadVideo__buttons">
                    <button className="uploadVideo__buttons__publish blueButton" onClick={this.handleClick}>PUBLISH</button>
                    <button className="uploadVideo__buttons__cancel">CANCEL</button>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoUpload);
