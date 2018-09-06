import domready from 'domready';

domready(() => {
  set_default_lang();
});

const set_default_lang =() => {
  if (!localStorage.getItem('lang') || (localStorage.getItem('lang') !== 'en' && localStorage.getItem('lang') !== 'fr')) {
    localStorage.setItem('lang', 'fr');
  }
};
