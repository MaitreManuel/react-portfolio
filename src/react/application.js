import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './utils/Routes';

const container = document.querySelector('main#content');

if (container) {
  ReactDOM.render(<Routes/>, container);
}
