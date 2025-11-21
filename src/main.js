import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { showLoadMoreButton } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  btnLoadMore: document.querySelector('.js-btn-load-more'),
};

let currentQuery = '';
let currentPage = 1;
let dataHits = 0;

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

  currentQuery = query;
  currentPage = 1;
  dataHits = 0;

  clearGallery();

  showLoader();

  // Taking and rendering data from site
  try {
    let data = await getImagesByQuery(query, currentPage);

    dataHits = data.totalHits;

    createGallery(data.hits);
    checkResults(currentPage, dataHits);
  } catch (err) {
    console.log(err);
  }
  hideLoader();
});

// event for button load more
refs.btnLoadMore.addEventListener('click', async event => {
  try {
    showLoader();
    currentPage++;

    // add img to gallery and page
    let data = await getImagesByQuery(currentQuery, currentPage);

    checkResults(currentPage, dataHits);
    createGallery(data.hits);
    scrollPage();

    hideLoader();
  } catch (error) {
    console.log(error);
  }
});

// function for check if data is empty or not and if there are no more results
function checkResults(currentPage, dataHits) {
  if (dataHits !== 0) {
    showLoadMoreButton();
    if (currentPage * 15 >= dataHits) {
      hideLoadMoreButton();
      iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        backgroundColor: '#ef4040',
        messageColor: '#fafafb',
        position: 'topRight',
        progressBarColor: '#b51b1b',
      });
    }
  }
}

// function for scroll when more img
function scrollPage() {
  const twoHeight = 492;
  document.body.getBoundingClientRect();
  window.scrollBy({
    top: twoHeight,
    // left: 0,
    behavior: 'smooth',
  });
}
