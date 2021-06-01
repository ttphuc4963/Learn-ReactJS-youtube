import './App.css';
import React from 'react';
import Search from './Search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('');
  }
  onSearchSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
        chart: 'mostPopular',
        regionCode: 'VN',
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Search onSubmit={this.onSearchSubmit} />
        <div className="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
