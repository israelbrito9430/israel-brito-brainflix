import React from 'react';

function VideoUpload() {

  return (
    <div>
      <div>
          <h1>Upload Video</h1>
      </div>
      <div>
          <div>
              <span>VIDEO THUMBNAIL</span>
              <img src="../" alt=""  />
          </div>
          <div>
              <span>TITLE YOUR VIDEO</span>
              <input type="text" placeholder="Add a title to your video" />

              <span>ADD A VIDEO DESCRIPTION</span>
              <input type="text" placeholder="Add a description of your video" />
          </div>
      </div>
      <div>
          <button>CANCEL</button>
          <button>PUBLISH</button>
      </div>
  </div>
  )
}

export default VideoUpload;
