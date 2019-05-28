import axios from 'axios';

const KEY = 'AIzaSyCyNV3f_7Uis0H4bm25g1E2CyaTCFh2koY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
		part: 'snippet',
		maxResults: 20,
		key: KEY
  }
});