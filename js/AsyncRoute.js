// @flow

import React from 'react';
import Spinner from './Spinner';

class AsyncRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.props.loadingPromise
      .then(module => {
        this.component = module.default
        this.setState({ loaded: true });
      });
  }
  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    } else {
      return <Spinner />
    }
  }

}

export default AsyncRoute;