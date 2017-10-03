import React from 'react';
import preload from '../data';

// components
import ShowCard from './ShowCard';

const Search = () =>
  <div className="search">
    {preload.shows.map((show =>
      <ShowCard show={show} />
    ))}
  </div>

 export default Search;