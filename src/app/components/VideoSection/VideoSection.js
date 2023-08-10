import React from 'react';

const VideoSection = () => {
  return (
    <div className="container-fluid pt-3 mb-5">
      <div className="row">
        <div className="col-12">
          <video controls className="homepage-video" width="320" height="240" poster="/video-banner1.webp">
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
