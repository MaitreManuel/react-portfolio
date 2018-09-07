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
          <Directory iD={ 'directory-general' } name = { { en: 'General',  fr: 'Général' } } icon = 'fa-folder-open-o' status = 'open'
            entries   = {[
              {
                path  : '/',
                icon  : 'fa-home',
                name  : {
                  en: 'Home',
                  fr: 'Accueil'
                }
              }, {
                path  : '/contact',
                icon  : 'fa-envelope-open-o',
                name  : {
                  en: 'Contact',
                  fr: 'Contact'
                }
              },
            ]}
          />
          <Directory iD={ 'directory-formations' } name = { { en: 'Studies',  fr: 'Formations' } } icon = 'fa-folder-open-o' status = 'open'
            entries   = {[
              {
                path  : '/school-42',
                icon  : 'fa-book',
                name  : {
                  en: '42 School',
                  fr: 'École 42'
                }
              }, {
                path  : '/dut-info',
                icon  : 'fa-graduation-cap',
                name  : {
                  en: 'DipHE IT',
                  fr: 'DUT Info.'
                }
              }, {
                path  : '/lp-sil',
                icon  : 'fa-graduation-cap',
                name  : {
                  en: 'BSC Degree IT',
                  fr: 'Licence Pro. SIL'
                }
              }, {
                path  : '/master-dw',
                icon  : 'fa-clock-o',
                name  : {
                  en: 'Master Web Dev',
                  fr: 'Mastère Web Dev'
                },
              }
            ]}
          />
          <Directory iD={ 'directory-projects' } name = { { en: 'Projects',  fr: 'Projets' } } icon = 'fa-folder-open-o' status = 'open'
            entries   = {[
              {
                path  : '/bee-alive',
                icon  : 'fa-forumbee',
                name  : {
                  en: 'Bee Alive',
                  fr: 'Bee Alive'
                }
              }, {
                path  : '/city-happiness-report',
                icon  : 'fa-street-view',
                name  : {
                  en: 'City happiness report',
                  fr: 'City happiness report'
                }
              }, {
                path  : '/porndraw',
                icon  : 'fa-heart',
                name  : {
                  en: 'Porndraw',
                  fr: 'Porndraw'
                }
              }, {
                path  : '/space-404',
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

