import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';

import Panel from './Panel';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const template = this.props.children;

    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-3 p-0 brd-right-1-black">
              <Panel />
            </div>
            <div className="col-9 p-0">
              { template }
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Container.propTypes = {
  children     : PropTypes.node,
};

export default Container;
