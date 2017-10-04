import React from 'react';
import preload from '../data';

// components
import ShowCard from './ShowCard';

class Search extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input type="text" placeholder="Search" />
        </header>
        <div>
          {preload.shows.map((show, key) =>
            <ShowCard show={show} key={show.imdbID} index={key} />
          )}
        </div>
      </div>
    )
  }
}

 export default Search;