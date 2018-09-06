import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Contact from './../pages/Contact';
import Home from './../pages/Home';

import DUT_Info from './../pages/DUT_Info';
import LP_SIL from './../pages/LP_SIL';
import MasterDW from './../pages/MasterDW';
import School_42 from './../pages/School_42';

import BeeAlive from './../pages/BeeAlive';
import City_Hapinness_Report from './../pages/City_Hapinness_Report';
import Porndraw from './../pages/Porndraw';
import Space_404 from './../pages/Space_404';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={ '/' } component={ Home }></Route>
          <Route exact path={ '/contact' } component={ Contact }></Route>
          <Route exact path={ '/school-42' } component={ School_42 }></Route>
          <Route exact path={ '/dut-info' } component={ DUT_Info }></Route>
          <Route exact path={ '/lp-sil' } component={ LP_SIL }></Route>
          <Route exact path={ '/master-dw' } component={ MasterDW }></Route>
          <Route exact path={ '/bee-alive' } component={ BeeAlive }></Route>
          <Route exact path={ '/city-happiness-report' } component={ City_Hapinness_Report }></Route>
          <Route exact path={ '/porndraw' } component={ Porndraw }></Route>
          <Route exact path={ '/space-404' } component={ Space_404 }></Route>
          <Route component={ Home } />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
