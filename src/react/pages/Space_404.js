import React, { Component } from 'react';

import Container from './../components/Container';

class Space_404 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div id="Space_404" className="content">
          <h1>Space 404</h1>
          <p>
            Projet personnel dans le but de réaliser des animations en pur CSS.
            <br />
            Techno :
          </p>
          <ul>
            <li>CSS</li>
          </ul>
          <div>
            <a href="https://maitremanuel.github.io/space_404" target="_blank" rel="noopener noreferrer">Projet</a>
          </div>
        </div>
      </Container>
    );
  }
}

export default Space_404;
