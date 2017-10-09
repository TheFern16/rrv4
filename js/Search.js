// @flow
import React from 'react';

// react-redux
import { connect } from 'react-redux';

// components
import ShowCard from './ShowCard';
import Header from './Header';

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
        <Header
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
        />
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