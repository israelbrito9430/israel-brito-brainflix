import React from 'react';

import PageHeader from '../components/PageHeader/PageHeader';
import VideoUpload from '../components/VideoUpload/VideoUpload';

class PageUpload extends React.Component {

  render() {
    return (
      <>
        <PageHeader />
        <VideoUpload />
      </>
    );
  }
}

export default PageUpload;
