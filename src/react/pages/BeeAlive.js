import React, { Component } from 'react';

import Container from './../components/Container';

class BeeAlive extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div id="BeeAlive" className="content">
          <h1>BeeAlive</h1>
        </div>
      </Container>
    );
  }
}

export default BeeAlive;
