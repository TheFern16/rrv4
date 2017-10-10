// @flow
import React from 'react';

// react-redux
import { connect } from 'react-redux';

// components
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: { searchTerm: string, shows: Arrow<Show> }) =>
    <div className="search">
      <Header showSearch />
      <div>
        {props.shows
          .filter(show => `${show.title} ${show.description}`
            .toUpperCase()
            .indexOf(props.searchTerm.toUpperCase()) >= 0)
          .map((show, key) =>
          <ShowCard show={show} key={show.imdbID} index={key} />
        )}
      </div>
    </div>

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;

export default connect(mapStateToProps)(Search);