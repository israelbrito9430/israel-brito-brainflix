import React from 'react';

import Header from '../components/Header/Header'
import VideoUpload from '../components/VideoUpload/VideoUpload'

class VideoUploadPage extends React.Component {

  render() {
    console.log('VideoUpload');

    return (
      <>
        <Header />
        <VideoUpload />
      </>
    );
  }
}

export default VideoUploadPage;
