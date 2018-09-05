import PropTypes from 'prop-types';
import React from 'react';
import { translations_prop } from '../../assets/tools/functions/translations';

const Directory = ({ iD, name, icon, entries }) => {
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
      <div key={ entry.name.en } className="sub" title={ translations_prop(entry.name) }>
        <i className="fa fa-angle-right drop-icon" aria-hidden="true"></i>
        &nbsp;&nbsp;
        <i className={ 'fa '+ entry.icon } aria-hidden="true"></i>
        &nbsp;
        <span>{ translations_prop(entry.name) }</span>
      </div>
    );
  }

  return (
    <div id={ iD } className="directory close" onClick={ () => toggle_directory(iD) }>
      <div className="dropdown" title={ translations_prop(name) }>
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
  icon        : PropTypes.string.isRequired,
  iD          : PropTypes.string.isRequired,
  name        : PropTypes.object.isRequired,
  entries     : PropTypes.array.isRequired,
};

export default Directory;
