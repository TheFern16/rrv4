// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import setSearchTerm from './actionCreators';

class Landing extends React.Component {
  constructor() {
    super();
    this.props = {
      searchTerm: string,
      handleSearchTermChange: Function
    };

  }

  goToSearch(event: SyntheticEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="landing">
        <h1>Matt's Video Service {props.searchTerm}</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={props.handleSearchTermChange}
            value={props.searchTerm}
            type="text" placeholder="search" />
          </form>
        <Link to="/search">or Browse All</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);