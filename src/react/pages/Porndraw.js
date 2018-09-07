import React, { Component } from 'react';

import Container from './../components/Container';

class Porndraw extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div id="Porndraw" className="content">
          <h1>Porndraw</h1>
          <p>
            Projet pour faire des dessins vectoriels à l'aide d'un alogorithme et de données provenant de PornHub
            <br />
            Librairies :
          </p>
          <ul>
            <li>Express</li>
            <li>dat.gui</li>
            <li>canvas2svg</li>
          </ul>
          <div>
            <a href="https://maitremanuel.github.io/porndraw" target="_blank" rel="noopener noreferrer">Projet</a>
          </div>
        </div>
      </Container>
    );
  }
}

export default Porndraw;
