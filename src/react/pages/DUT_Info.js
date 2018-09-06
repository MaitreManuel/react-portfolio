import React, { Component } from 'react';

import Container from './../components/Container';

class DUT_Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div id="DUT_Info" className="content">
          <h1>DUT_Info</h1>
        </div>
      </Container>
    );
  }
}

export default DUT_Info;
