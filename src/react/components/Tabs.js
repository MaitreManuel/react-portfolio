import React from 'react';
import { NavLink } from 'react-router-dom';

import { translations_store } from '../../assets/tools/functions/translations';
import { is_json_valid } from '../../assets/tools/functions/utils';

const Tabs = () => {
  const check_pages = () => {
    if (!sessionStorage.getItem('pages') || !is_json_valid(sessionStorage.getItem('pages'))) {
      sessionStorage.setItem('pages', JSON.stringify([
        {
          icon: 'fa-home',
          name: translations_store('home'),
          path: '/'
        }, {
          icon: 'fa-envelope-open-o',
          name: translations_store('contact'),
          path: '/contact'
        }
      ]));
    }

    return generate_tabs();
  };
  const generate_tabs = () => {
    const pages = JSON.parse(sessionStorage.getItem('pages'));
    let buffer = [];

    for (let i = 0; i < pages.length; i++) {
      let page = pages[i];

      buffer.push(
        <NavLink key={ page.name } to={ page.path } exact className="tab-nav-link" activeClassName="active">
          <div className="tab">
            <i className="fa fa-times brd-rad-2" aria-hidden="true"></i>
            <div className="title d-table">
              <h3><i className={ 'fa '+ page.icon } aria-hidden="true"></i> { page.name }</h3>
            </div>
          </div>
        </NavLink>
      );
    }

    return buffer;
  };

  let template = check_pages();

  return (
    <div className="tabs">
      { template }
    </div>
  );
};

export default Tabs;
