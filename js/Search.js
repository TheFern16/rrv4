// @flow

import React from 'react';

// components
import ShowCard from './ShowCard';



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.defaultProps = {
      shows: []
    }

    this.state = {
      searchTerm: ''
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(e: SyntheticKeyboardEvent & { target: HTMLInputElement }) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <div className="search">
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search" />
        </header>
        <div>
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show, key) =>
            <ShowCard show={show} key={show.imdbID} index={key} />
          )}
        </div>
      </div>
    )
  }
}

 export default Search;