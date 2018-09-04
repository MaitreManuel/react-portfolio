import PropTypes from 'prop-types';
import React from 'react';

const Directory = ({ iD, name, icon, entries }) => {
  const lang = localStorage.getItem('lang'),
    toggle_directory = iD_directory => {
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
      <div key={ entry.name.en} className="sub" title={ lang === 'fr' ? entry.name.fr : entry.name.en }>
        <i className="fa fa-angle-right drop-icon" aria-hidden="true"></i>
        &nbsp;&nbsp;
        <i className={ 'fa '+ entry.icon } aria-hidden="true"></i>
        &nbsp;
        <span>{ lang === 'fr' ? entry.name.fr : entry.name.en }</span>
      </div>
    );
  }

  return (
    <div id={ iD } className="directory close" onClick={ () => toggle_directory(iD) }>
      <div className="dropdown" title={ lang === 'fr' ? name.fr : name.en }>
        <i className="fa fa-angle-right drop-icon" aria-hidden="true"></i>
        &nbsp;&nbsp;
        <i className={ 'fa '+ icon } aria-hidden="true"></i>
        &nbsp;
        <span>{ lang === 'fr' ? name.fr : name.en }</span>
      </div>
      <div className="subs-dropdown">
        { entries_dom }
      </div>
    </div>
  );
};

Directory.propTypes = {
  icon        : PropTypes.string,
  iD          : PropTypes.string,
  name        : PropTypes.object,
  entries     : PropTypes.array,
};

export default Directory;
