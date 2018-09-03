import React, { Component } from 'react';

import Tab from '../components/Tab';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab>
        <section id="Home" className="tab">
          <h1>Home</h1>
        </section>
      </Tab>
    );
  }
}

export default Home;
