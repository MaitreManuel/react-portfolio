// styles
import './main.scss';

// scripts
import './footer/footer';
import './panel/panel';

// libs
import domready from 'domready';
import SimpleBar from 'simplebar';

domready(() => {
  new SimpleBar(document.getElementById('SimpleBar-Div'), { autoHide: true });
});
