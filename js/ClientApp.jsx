import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div className="app">
      <div className="landing">
        <h1>Matt's Video Service</h1>
        <input type="text" placeholder="search" />
        <a href="#">or Browse All</a>
      </div>
    </div>
  )
}