import React, {Component, Fragment} from 'react';

import Container from './../components/Container';

class LP_SIL extends Component {
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
        <span>Développement web (HTML/CSS, JavaScript (React), Java (J2EE: Servlet, Spring, Hibernate))</span>
        <span>Développement mobile (Android)</span>
        <span>Gestion de projet logicielle (Maven, Ant), conception (UML, Agile, XP)</span>
        <span>Communication digitale et anglaise</span>
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

export default LP_SIL;
