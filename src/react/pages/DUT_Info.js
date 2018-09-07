import React, {Component, Fragment} from 'react';

import Container from './../components/Container';

class DUT_Info extends Component {
  constructor(props) {
    super(props);

    const template = this.preRendering(),
      lines = this.generateFakeLineNumber(template);

    this.generateFakeLineNumber   = this.generateFakeLineNumber.bind(this);
    this.preRendering             = this.preRendering.bind(this);

    this.state = {
      lines     : lines,
      template  : template
    };
  }

  generateFakeLineNumber(template) {
    const nb_lines = Math.floor((document.documentElement.offsetHeight - 80) / 16) - template.props.children.length;
    let lines_generate = [];

    for (let i = 0; i < nb_lines; i++) {
      lines_generate.push(
        <span key={ 'line-'+ i }><br /></span>
      );
    }

    return lines_generate;
  }

  preRendering() {
    return (
      <Fragment>
        <span>Développement web (HTML/CSS, JavaScript (Bootstrap, Canvas), PHP (Code Igniter))</span>
        <span>Développement mobile (Android)</span>
        <span>Développement objet (Java)</span>
        <span>Développement système (C, bash, assembleur)</span>
        <span>Gestion de projet (SCRUM, Agile, XP, UML)</span>
        <span>Stratégie digitale marketing</span>
        <span>Communication marketing et anglaise</span>
      </Fragment>
    );
  }

  render() {
    const lines = this.state.lines,
      template = this.state.template;

    return (
      <Container>
        <div className="content code">
          <pre>
            { template }
            { lines }
          </pre>
        </div>
      </Container>
    );
  }
}

export default DUT_Info;
