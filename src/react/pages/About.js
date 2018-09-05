import React, { Component } from 'react';

import Container from '../components/Container';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div className="content">
          <h1>À propos de</h1>
        </div>
      </Container>
    );
  }
}

export default About;
