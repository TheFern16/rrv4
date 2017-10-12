// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// data
import preload from '../data.json';

// components
import AsyncRoute from './AsyncRoute';

const FourZeroFour = () => <h1>Page Not Found</h1>;

const App = () =>
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={ props =>
            <AsyncRoute props={props} loadingPromise={ import('./Landing') }/> }
          />
          <Route path="/search" component={ props =>
            <AsyncRoute
              props={ Object.assign({ shows: preload.shows }, props) }
              loadingPromise={ import('./Search') } /> }
          />
          <Route
            path="/details/:id"
            component={
              (props: { match: Match }) => {
                const sShow = preload.shows.find(show => props.match.params.id === show.imdbID);
                return <AsyncRoute
                  props={ Object.assign({ show: sShow }, props)}
                  loadingPromise={ import('./Details') } /> }
            }
          />
          <Route component={FourZeroFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>

export default App;