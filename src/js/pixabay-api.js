// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const pixabayApiKey = '53339801-8b3ce8e2b4688b576eb7bcf24';
const pixabayUrl = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  try {
    const pixabayParams = {
      key: pixabayApiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    };
    const response = await axios.get(pixabayUrl, { params: pixabayParams });
    if (response.data.hits.length === 0) {
      iziToast.show({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        backgroundColor: '#ef4040',
        messageColor: '#fafafb',
        position: 'topRight',
        progressBarColor: '#b51b1b',
      });
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
