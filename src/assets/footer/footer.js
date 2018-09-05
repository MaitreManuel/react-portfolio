import domready from 'domready';

domready(() => {
  set_default_lang(() => {
    set_select_default_lang();
  });
  change_lang();
});

const set_default_lang = callback => {
  if (!localStorage.getItem('lang') || (localStorage.getItem('lang') !== 'en' && localStorage.getItem('lang') !== 'fr')) {
    localStorage.setItem('lang', 'fr');
  }
  callback();
};
const change_lang = () => {
  const lang = document.querySelector('select[name="lang"]');

  if (lang) {
    lang.addEventListener('change', () => {
      if (lang.value !== localStorage.getItem('lang')) {
        localStorage.setItem('lang', lang.value);
        location.reload();
      }
    });
  }
};
const set_select_default_lang = () => {
  const lang = document.querySelector('select[name="lang"]');

  if (lang) {
    lang.value = localStorage.getItem('lang');
  }
};
