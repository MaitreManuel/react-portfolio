import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Tab = ({ children }) => {
  const template = children;

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row justify-content-center">
          
        </div>
      </div>
    </Fragment>
  );
}

Tab.propTypes = {
  children     : PropTypes.node.isRequired,
};

export default Tab;
