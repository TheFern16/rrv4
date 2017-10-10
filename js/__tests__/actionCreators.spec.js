// @flow

import { setSearchTerm, addApiData } from '../actionCreators';

describe('actionCreators', () => {

  it('should render results for a new york query', () => {
    expect(setSearchTerm('New York')).toMatchSnapshot();
  });

  it('should render results for a black query', () => {
    expect(setSearchTerm('black')).toMatchSnapshot();
  });

  it('should add api data when passed an api data object', () => {
    expect(
      addApiData({
        "title": "Stranger Things",
        "year": "2016–",
        "description": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
        "poster": "st.jpg",
        "imdbID": "tt4574334",
        "trailer": "9Egf5U8xLo8",
        "rating": "8.6"
      })
    ).toMatchSnapshot();
  });
});

