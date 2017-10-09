// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Landing = () =>
  <div className="landing">
    <h1>Matt's Video Service</h1>
    <input type="text" placeholder="search" />
    <Link to="/search">or Browse All</Link>
  </div>

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps)(Landing);