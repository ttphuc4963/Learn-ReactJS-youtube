import React from 'react';

const VideoDetail = ({ video }) => {
  return !video ? (
    <div></div>
  ) : (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="YouTube video player"
          frameBorder=""
          width="560"
          height="315"
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
