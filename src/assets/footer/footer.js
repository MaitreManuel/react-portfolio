import domready from 'domready';

domready(() => {
  set_select_default_lang();
  change_lang();
});

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
