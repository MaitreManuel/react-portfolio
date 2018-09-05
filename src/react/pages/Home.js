import React, { Component } from 'react';

import Container from '../components/Container';
import Tab from '../components/Tab';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Tab>
          <section id="Home" className="tab">
            <h1>Home</h1>
          </section>
        </Tab>
      </Container>
    );
  }
}

export default Home;
