import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);

axios.defaults.baseURL = BASE_URL;

function getImagesByQuery(query) {
  return axios({
    url: `${BASE_URL}/?key=${API_KEY}`,
    method: 'get',
    params: {
      apiKey: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => console.log(response.data))
    .catch(error => console.log(error.message));
}
getImagesByQuery('cats');
