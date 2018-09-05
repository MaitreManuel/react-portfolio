import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Footer from './Footer';
import Panel from './Panel';
import Tabs from './Tabs';

const Container = ({ children }) => {
  const template = children;

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-panel">
            <Panel />
          </div>
          <div className="col-tab p-relative">
            <div className="wrapper-content">
              <Tabs />
              { template }
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

Container.propTypes = {
  children     : PropTypes.node.isRequired,
};

export default Container;
