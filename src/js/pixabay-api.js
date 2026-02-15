import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '54656491-d198bfb98120e598fae018f1a';
axios.defaults.baseURL = BASE_URL;

export function request(query) {
  return axios({
    url: `/?key=${API_KEY}`,
    method: 'get',
    params: {
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => response.data)
    .catch(error => console.log(error));
}
