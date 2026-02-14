import axios from 'axios';
import { getImagesByQuery } from './pixabay-api';

const BASE_URL = 'https://pixabay.com/api/';
const API = '54656491-d198bfb98120e598fae018f1a';

axios.defaults.baseURL = BASE_URL;

getImagesByQuery('yellow+flower');

function createGallery(images) {}
function refresh() {}
function clearGallery() {}
function showLoader() {}
function hideLoader() {}
