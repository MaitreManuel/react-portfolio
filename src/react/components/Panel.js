import React from 'react';

import Directory from './Directory';
import { translations_store } from '../../assets/tools/functions/translations';

const Panel = () => {
  return (
    <aside id="panel" className="p-relative">
      <div className="toggle-panel p-absolute brd-right-1-black brd-right-rad-50">
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <i className="fa fa-angle-right d-none" aria-hidden="true"></i>
      </div>
      <div className="wrapper-text brd-right-1-black p-relative">
        <div className="title">
          <h5>{ translations_store('project') }</h5>
        </div>
        <div className="directories p-relative">
          <Directory iD={ 'directory-formations' } name = { { en: 'Studies',  fr: 'Formations' } } icon = 'fa-folder-open-o'
            entries   = {[
              {
                icon  : 'fa-book',
                name  : {
                  en: '42 School',
                  fr: 'Ecole 42'
                }
              }, {
                icon  : 'fa-graduation-cap',
                name  : {
                  en: 'DipHE IT',
                  fr: 'DUT Info.'
                }
              }, {
                icon  : 'fa-graduation-cap',
                name  : {
                  en: 'BSC Degree IT',
                  fr: 'Licence Pro. SIL'
                }
              }, {
                icon  : 'fa-clock-o',
                name  : {
                  en: 'Master Web Dev',
                  fr: 'Mastère Web Dev'
                },
              }
            ]}
          />
          <Directory iD={ 'directory-projects' } name = { { en: 'Projects',  fr: 'Projets' } } icon = 'fa-folder-open-o'
            entries   = {[
              {
                icon  : 'fa-forumbee',
                name  : {
                  en: 'beeAlive',
                  fr: 'beeAlive'
                }
              }, {
                icon  : 'fa-street-view',
                name  : {
                  en: 'City happiness report',
                  fr: 'City happiness report'
                }
              }, {
                icon  : 'fa-heart',
                name  : {
                  en: 'Porndraw',
                  fr: 'Porndraw'
                }
              }, {
                icon  : 'fa-rocket',
                name  : {
                  en: 'Space 404',
                  fr: 'Space 404'
                },
              }
            ]}
          />
        </div>
      </div>
    </aside>
  );
}

export default Panel;

