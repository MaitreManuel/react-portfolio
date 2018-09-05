import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import About from './../pages/About';
import Contact from './../pages/Contact';
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={ '/' } component={ Home }></Route>
          <Route exact path={ '/about' } component={ About }></Route>
          <Route exact path={ '/contact' } component={ Contact }></Route>
          <Route component={ NotFound } />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
