import React, { Component } from 'react';

import Container from '../components/Container';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <section id="Home" className="tab">
          <h1>Home</h1>
        </section>
      </Container>
    );
  }
}

export default Home;
