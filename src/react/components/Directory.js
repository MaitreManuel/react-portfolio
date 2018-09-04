import PropTypes from 'prop-types';
import React from 'react';

const Directory = ({ name, icon, entries }) => {
  return (
    <div className="directory">
      <div className="dropdown" role="button" title={ name }>
        <i className="fa fa-angle-right drop-icon" aria-hidden="true"></i>
        &nbsp;&nbsp;
        <i className={ 'fa '+ icon } aria-hidden="true"></i>
        &nbsp;
        <span>{ name }</span>
      </div>
    </div>
  );
};

Directory.propTypes = {
  icon        : PropTypes.string,
  name        : PropTypes.string,
  entries     : PropTypes.array,
};

export default Directory;
