import cards from '../menu.json';
import template from '../templates/template-item.hbs';
import myRefs from './refs.js';

const {menu} = myRefs;
const galleryListMarkup = template(cards);
menu.insertAdjacentHTML('beforeend', galleryListMarkup);