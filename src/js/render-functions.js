import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
  captionDelay: 250,
  captionSelector: 'self',
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
  <li class="gallery-item">
    <a href="${image.largeImageURL}" title="${image.tags}">
      <img src="${image.webformatURL}" alt="${image.tags}" />
    </a>
    <div class="info">
      <p><b>Likes:</b> ${image.likes}</p>
      <p><b>Views:</b> ${image.views}</p>
      <p><b>Comments:</b> ${image.comments}</p>
      <p><b>Downloads:</b> ${image.downloads}</p>
    </div>
  </li>
`;
    })
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('is-visible');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('is-visible');
}
