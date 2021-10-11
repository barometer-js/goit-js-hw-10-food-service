import myRefs from './refs.js';

const {body, checkbox } = myRefs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const currentTheme = localStorage.getItem('theme') || LIGHT;

localStorage.setItem('theme', currentTheme);
body.classList.add(currentTheme);
checkbox.checked = currentTheme === DARK;

checkbox.addEventListener('change', onCheckboxClick);

function onCheckboxClick() {
  body.classList.toggle(DARK);
  body.classList.toggle(LIGHT);

  localStorage.setItem('theme', checkbox.checked ? DARK : LIGHT);
};