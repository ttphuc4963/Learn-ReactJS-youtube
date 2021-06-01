import axios from 'axios';
const KEY = 'AIzaSyAJyNXSvQJBkaqB7HRwF6ZgYZA8xIbJ-zU';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
