import React, { Component } from 'react';

import Container from '../components/Container';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div className="code">
          <pre>
            <span>a</span>
            <span>z</span>
            <span>e</span>
            <span>r</span>
            <span>t</span>
            <span>y</span>
            <span>u</span>
            <span>i</span>
            <span>o</span>
            <span>p</span>
          </pre>
        </div>
      </Container>
    );
  }
}

export default Home;
