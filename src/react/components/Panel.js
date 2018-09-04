import React from 'react';

import Directory from './Directory';

const Panel = () => {
  return (
    <aside id="panel" className="p-relative">
      <div className="toggle-panel p-absolute brd-right-1-black brd-right-rad-50">
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <i className="fa fa-angle-right d-none" aria-hidden="true"></i>
      </div>
      <div className="wrapper-text brd-right-1-black p-relative">
        <div className="title">
          <h5>Project</h5>
        </div>
        <div className="directories p-relative">
          <Directory
            name      = 'Formations'
            icon      = 'fa-folder-open-o'
            entries   = {[
              {
                icon  : 'fa-graduation-cap',
                name  : 'Ecole 42',
              },
              {
                icon  : 'fa-graduation-cap',
                name  : 'DUT Info.',
              },
              {
                icon  : 'fa-graduation-cap',
                name  : 'Licence Pro SIL',
              },
              {
                icon  : 'fa-clock-o',
                name  : 'Mastère Web Dev',
              }
            ]}
          />
        </div>
      </div>
    </aside>
  );
}

export default Panel;

