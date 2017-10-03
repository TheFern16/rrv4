import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Landing from './Landing';
import Search from './Search';

const App = () =>
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </BrowserRouter>

render(<App />, document.querySelector('#app'));