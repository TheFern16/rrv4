import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Landing from './Landing';
import Search from './Search';
import App from './App';

const renderApp = () => {
  render(<App />, document.querySelector('#app'));
}

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}