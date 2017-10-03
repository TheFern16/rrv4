import React from 'react';
import preload from '../data';
console.log(preload);
const Search = () =>
  <div className="search">
    {preload.shows.map((show =>
      <div>
        <div className="show-card">
          <img alt={`${show.title} Show Poster`} src={`/img/posters/${show.poster}`} />
        </div>
        <div>
          <h3>{show.title}</h3>
          <h4>({show.year})</h4>
          <p>{show.description}</p>
        </div>
      </div>
    ))}
  </div>

 export default Search;