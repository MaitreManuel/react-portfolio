import TRANSLATIONS from '../../../translations/general';

export const translations_prop = entry => {
  let buffer = '';
  const lang = localStorage.getItem('lang');

  if (lang === 'en') {
    buffer = entry.en;
  } else {
    buffer = entry.fr;
  }

  return buffer;
};

export const translations_store = key => {
  let buffer = '';
  const lang = localStorage.getItem('lang');

  if (lang === 'en') {
    buffer = TRANSLATIONS[key].en;
  } else {
    buffer = TRANSLATIONS[key].fr;
  }

  return buffer;
};
