import React, { Component } from 'react';

import Container from './../components/Container';

class City_Happiness_Report extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div id="City_Happiness_Report" className="content pl-5">
          <h1>City Happiness Report</h1>
          <p>
            Application pour voir différents critères de niveau de vie dans les plus grandes villes de France.
            <br />
            Librairies :
          </p>
          <ul>
            <li>React v16</li>
            <li>Bootstrap v4</li>
          </ul>
          <div>
            <a href="https://maitremanuel.github.io/cities-happiness-report" target="_blank" rel="noopener noreferrer">Projet</a>
          </div>
        </div>
      </Container>
    );
  }
}

export default City_Happiness_Report;
