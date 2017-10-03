import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

// component
import Landing from './Landing';

const App = () =>
  <div className="app">
    <Route exact path="/" component={Landing} />
  </div>

render(<App />, document.querySelector('#app'));