import React, { Component } from 'react';

import Container from '../components/Container';

import { translations_store } from '../../assets/tools/functions/translations';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div id="Contact" className="content">
          <div className="top">
            <h1>{ translations_store('contact.title') }</h1>
            <button className="btn btn-primary" role="button">{ translations_store('contact.mail') }</button>
          </div>
          <div className="wrapper-atom" title="Animation Atom Electrons">
            <div className="wrap">
              <div className="circle horizontal c1">
                <div className="wrap-electron">
                  <div className="circle electron"></div>
                </div>
              </div>
              <div className="circle vertical c1">
                <div className="wrap-electron">
                  <div className="circle electron"></div>
                </div>
              </div>
            </div>
            <div className="wrap r">
              <div className="circle horizontal c2">
                <div className="wrap-electron">
                  <div className="circle electron"></div>
                </div>
              </div>
              <div className="circle vertical c2">
                <div className="wrap-electron">
                  <div className="circle electron"></div>
                </div>
              </div>
              <div className="circle center"></div>
            </div>
          </div>
          <div className="bottom">
            <h3>{ translations_store('contact.social_network') }</h3>
            <div className="mt-5">
              <a href="https://github.com/MaitreManuel" className="px-5" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github fa-3x" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/trystan-eveno" className="px-5" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/Maitre_Manuel" className="px-5" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Contact;
