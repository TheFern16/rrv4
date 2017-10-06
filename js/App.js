// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Landing from './Landing';
import Search from './Search';
import Details from './Details';

const FourZeroFour = () => <h1>Page Not Found</h1>;

const App = () =>
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/details/:id" component={Details} />
        <Route component={FourZeroFour} />
      </Switch>
    </div>
  </BrowserRouter>

export default App;