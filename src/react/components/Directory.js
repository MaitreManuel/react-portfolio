import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { translations_prop } from '../../assets/tools/functions/translations';

const Directory = ({ iD, name, icon, entries, status = 'close' }) => {
  const add_tab = entry => {
    let is_already_a_tab = false,
      pages = JSON.parse(sessionStorage.getItem('pages'));

    for (let i = 0; i < pages.length; i++) {
      if (pages[i].path === entry.path) {
        is_already_a_tab = true;
      }
    }

    if (is_already_a_tab === false) {
      pages.push(
        {
          icon: entry.icon,
          name: translations_prop(entry.name),
          path: entry.path
        }
      );
    }

    sessionStorage.setItem('pages', JSON.stringify(pages));
  };
  const toggle_directory = iD_directory => {
    const directory = document.querySelector(`#${ iD_directory }`);

    if (directory.classList.contains('open') || !directory.classList.contains('close')) {
      directory.classList.remove('open');
      directory.classList.add('close');
      directory.querySelector('.drop-icon').classList.remove('fa-angle-down');
      directory.querySelector('.drop-icon').classList.add('fa-angle-right');
    } else {
      directory.classList.add('open');
      directory.classList.remove('close');
      directory.querySelector('.drop-icon').classList.add('fa-angle-down');
      directory.querySelector('.drop-icon').classList.remove('fa-angle-right');
    }
  };
  let entries_dom = [];

  for (let i = 0; i < entries.length; i++) {
    let entry = entries[i];

    entries_dom.push(
      <NavLink key={ entry.name.en } exact to={ entry.path } className="project-nav-link" activeClassName="active" onClick={ () => add_tab(entry) }>
        <div className="sub" title={ translations_prop(entry.name) }>
          <i className="fa fa-angle-right drop-icon" aria-hidden="true"></i>
          &nbsp;&nbsp;
          <i className={ 'fa '+ entry.icon } aria-hidden="true"></i>
          &nbsp;
          <span>{ translations_prop(entry.name) }</span>
        </div>
      </NavLink>
    );
  }

  return (
    <div id={ iD } className={ 'directory '+ status }>
      <div className="dropdown" title={ translations_prop(name) } onClick={ () => toggle_directory(iD) }>
        <i className="fa fa-angle-right drop-icon" aria-hidden="true"></i>
        &nbsp;&nbsp;
        <i className={ 'fa '+ icon } aria-hidden="true"></i>
        &nbsp;
        <span>{ translations_prop(name) }</span>
      </div>
      <div className="subs-dropdown">
        { entries_dom }
      </div>
    </div>
  );
};

Directory.propTypes = {
  entries     : PropTypes.array.isRequired,
  icon        : PropTypes.string.isRequired,
  iD          : PropTypes.string.isRequired,
  name        : PropTypes.object.isRequired,
  status      : PropTypes.string,
};

export default Directory;
