// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';

// data
import preload from '../data.json';

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
        <Route path="/search" component={ props => <Search shows={preload.shows} />} />
        <Route
          path="/details/:id"
          component={
            (props: { match: Match }) => {
              const sShow = preload.shows.find(show => props.match.params.id === show.imdbID);
              return <Details show={sShow} {...props} />
            }
          }
        />
        <Route component={FourZeroFour} />
      </Switch>
    </div>
  </BrowserRouter>

export default App;