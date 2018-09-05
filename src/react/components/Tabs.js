import React from 'react';
import { NavLink } from 'react-router-dom';

import { translations_store } from '../../assets/tools/functions/translations';

const Tabs = () => {
  return (
    <div className="tabs">
      <NavLink to="/" exact className="tab-nav-link" activeClassName="active">
        <div className="tab">
          <i className="fa fa-times brd-rad-2" aria-hidden="true"></i>
          <div className="title d-table">
            <h3><i className="fa fa-home" aria-hidden="true"></i> { translations_store('home') }</h3>
          </div>
        </div>
      </NavLink>

      <NavLink to="/about" className="tab-nav-link" activeClassName="active">
        <div className="tab">
          <i className="fa fa-times brd-rad-2" aria-hidden="true"></i>
          <div className="title d-table">
            <h3><i className="fa fa-address-card-o" aria-hidden="true"></i> { translations_store('about') }</h3>
          </div>
        </div>
      </NavLink>

      <NavLink to="/contact" className="tab-nav-link" activeClassName="active">
        <div className="tab">
          <i className="fa fa-times brd-rad-2" aria-hidden="true"></i>
          <div className="title d-table">
            <h3><i className="fa fa-envelope-open-o" aria-hidden="true"></i> Contact</h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Tabs;
