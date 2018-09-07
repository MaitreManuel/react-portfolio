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
          <h1>Bee Alive</h1>
          <p>
            Application pour partager des messages en temps réel sous forme d'abeille animée pour sensibiliser les utilisateurs à la disparition des abeilles.
            <br />
            Librairies :
          </p>
          <ul>
            <li>Socket.io</li>
            <li>Mongoose (ORM pour MongoDB)</li>
            <li>Three.js</li>
            <li>GSAP</li>
          </ul>
          <div>
            <a href="https://naomihauret.github.io/beeAlive" target="_blank" rel="noopener noreferrer">Projet</a>
          </div>
        </div>
      </Container>
    );
  }
}

export default BeeAlive;
