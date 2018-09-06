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
            <button className="btn btn-primary" role="button">Mail</button>
          </div>
          <div className="wrapper-atom">
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Contact;
