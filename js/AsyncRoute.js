// @flow

import React from 'react';
import Spinner from './Spinner';

class AsyncRoute extends React.Component {
  constructor() {
    this.state = {
      loaded: false
    }
    componentDidMount() {
      this.props.loadingPromise
        .then(module => {
          this.component = module.default
          this.setState({ loaded: true });
        });
    }
  }

}

export class AsyncRoute;