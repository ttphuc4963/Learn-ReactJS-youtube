import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  render() {
    if (!this.props.videos[0]) return <div></div>;
    else {
      const videos = this.props.videos.map((e) => (
        <VideoItem
          onVideoSelect={this.props.onVideoSelect}
          key={e.id.videoId}
          video={e}
        />
      ));
      return (
        <div
          style={{ marginTop: '0', padding: '0' }}
          className="video-list segment ui relaxed list divided"
        >
          {videos}
        </div>
      );
    }
  }
}

export default VideoList;
