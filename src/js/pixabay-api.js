// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const pixabayApiKey = '53339801-8b3ce8e2b4688b576eb7bcf24';
const pixabayUrl = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const pixabayParams = {
    key: pixabayApiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return doGetRequest(pixabayUrl, pixabayParams);
}

function doGetRequest(url, params) {
  return axios
    .get(url, { params })
    .then(function (response) {
      if (response.data.total === 0) {
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          backgroundColor: '#ef4040',
          messageColor: '#fafafb',
          position: 'topRight',
          progressBarColor: '#b51b1b',
        });
      }
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}
