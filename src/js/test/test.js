import { createMurkup } from './createMarkup';

const list = document.querySelector('.book__list');
createMurkup().then(data=> list.innerHTML = data);