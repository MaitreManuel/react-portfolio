import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Tab = ({ children }) => {
  const template = children;

  return (
    <Fragment>
      <div className="layout-background p-absolute">

      </div>
      <div className="wrapper-content p-relative">
        { template }
      </div>
    </Fragment>
  );
}

Tab.propTypes = {
  children     : PropTypes.node.isRequired,
};

export default Tab;
