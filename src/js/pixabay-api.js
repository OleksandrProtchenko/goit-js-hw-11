import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = import.meta.env.VITE_PIXABEY_KEY;
axios.defaults.baseURL = BASE_URL;

export function request(query) {
  return axios({
    url: BASE_URL,
    method: 'get',
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => response.data)
    .catch(error => console.log(error));
}
