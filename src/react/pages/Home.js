import React, {Component, Fragment} from 'react';

import Container from '../components/Container';

class Home extends Component {
  constructor(props) {
    super(props);

    const template = this.preRendering(),
      lines = this.generateFakeLineNumber(template);

    // binding
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

export default Home;
