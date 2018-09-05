// styles
import './main.scss';

// scripts
import './footer/footer';
import './panel/panel';

// libs
import domready from 'domready';

domready(() => {
  if (!localStorage.getItem('lang') || (localStorage.getItem('lang') !== 'en' && localStorage.getItem('lang') !== 'fr')) {
    localStorage.setItem('lang', 'fr');
  }
});
