import axios from 'axios';

const KEY = 'AIzaSyBGGugh0vfYbtHt1pbfAql8iDyZCYgXssI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
		part: 'snippet',
		maxResults: 20,
		key: KEY
  }
});