import TRANSLATIONS_GENERAL from '../../../translations/general';

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
    buffer = TRANSLATIONS_GENERAL[key].en;
  } else {
    buffer = TRANSLATIONS_GENERAL[key].fr;
  }

  return buffer;
};
