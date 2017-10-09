// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import setSearchTerm from './actionCreators';

class Landing extends React.Component {
  constructor() {
    super();

    this.goToSearch = this.goToSearch.bind(this);
  }

  goToSearch(event: SyntheticEvent) {
    event.preventDefault();
    this.props.history.push('/search');
  }

  render() {
    return (
      <div className="landing">
        <h1>Matt's Video Service</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
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