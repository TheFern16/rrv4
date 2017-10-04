import React from 'react';
import preload from '../data';

// components
import ShowCard from './ShowCard';

const Search = () =>
  <div className="search">
    {preload.shows.map((show, key) =>
      <ShowCard show={show} key={show.imdbID} index={key} />
    )}
  </div>

 export default Search;