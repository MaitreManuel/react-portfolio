import React, { Component } from 'react';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  togglePanel() {

  }

  render() {
    return (
      <aside id="panel" className="p-relative">
        <div onClick={ this.togglePanel } className="toggle-panel p-absolute brd-right-1-black brd-right-rad-50">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          <i className="fa fa-angle-right d-none" aria-hidden="true"></i>
        </div>
        <div className="wrapper-text brd-right-1-black p-relative">
          <div className="title">
            <h5>Project</h5>
          </div>
          <div className="directories p-relative">

          </div>
        </div>
      </aside>
    );
  }
}

export default Panel;
