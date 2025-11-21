import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
};

// Function when press button
refs.form.addEventListener('submit', async event => {
  event.preventDefault();

  const input = refs.form.querySelector('input[name="search-text"]');
  const query = input.value.trim();

  // Check if input empty
  if (query === '') {
    input.value = '';
    return;
  }

  clearGallery();

  showLoader();

  // Taking and rendering data from site
  getImagesByQuery(query)
    .then(data => {
      createGallery(data.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => hideLoader());
});
