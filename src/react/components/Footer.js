import React from 'react';

import { translations_store } from '../../assets/tools/functions/translations';

const Footer = () => {
  const change_lang = e => {
    if (e.target.value !== localStorage.getItem('lang')) {
      localStorage.setItem('lang', e.target.value);
      location.reload();
    }
  };

  return (
    <footer id="footer-page" className="brd-top-1-black p-relative">
      <div className="container-fluid">
        <div className="row p-relative">
          <div className="col-6">
            <div className="infobox">
              <a href="https://github.com/MaitreManuel/react-portfolio" target="_blank" rel="noopener noreferrer" title={ translations_store('source_code') }>
                <i className="fa fa-github" aria-hidden="true"></i>
                <span>{ translations_store('source_code') }</span>
              </a>
            </div>
          </div>
          <div className="author p-absolute">
            <span><i className="fa fa-copyright" aria-hidden="true"></i>{ (new Date()).getFullYear() } - Trystan Eveno</span>
          </div>
          <div className="col-6">
            <div className="toolbox ml-auto">
              <a href="https://www.linkedin.com/in/trystan-eveno/" target="_blank" rel="noopener noreferrer" title="LinkedIn Trystan Eveno">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/Maitre_Manuel" target="_blank" rel="noopener noreferrer" title="Twitter @Maitre_Manuel">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <select className="mr-0" name="lang" defaultValue={ localStorage.getItem('lang') } onChange={ e => change_lang(e) }>
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
