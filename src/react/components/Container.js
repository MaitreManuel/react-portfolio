import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Footer from './Footer';
import Panel from './Panel';

const Container = ({ children }) => {
  const template = children;

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-panel">
            <Panel />
          </div>
          <div className="col-tab">
            { template }
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

Container.propTypes = {
  children     : PropTypes.node,
};

export default Container;
