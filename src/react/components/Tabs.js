import React from 'react';

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tab active">
        <div className="close">
          <i className="fa fa-times brd-rad-2" aria-hidden="true"></i>
          <div className="title d-table">
            <h3>Welcome</h3>
          </div>
        </div>
      </div>
      <div className="tab">
        <div className="close">
          <i className="fa fa-times brd-rad-2" aria-hidden="true"></i>
          <div className="title d-table">
            <h3>Welcome</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
