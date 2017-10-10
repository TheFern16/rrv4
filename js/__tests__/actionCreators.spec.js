// @flow

import moxios from 'moxios';
import { setSearchTerm, addApiData, getApiDetails } from '../actionCreators';

const strangerThings = {
  "title": "Stranger Things",
  "year": "2016–",
  "description": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
  "poster": "st.jpg",
  "imdbID": "tt4574334",
  "trailer": "9Egf5U8xLo8",
  "rating": "8.6"
}

describe('actionCreators', () => {

  it('should render results for a new york query', () => {
    expect(setSearchTerm('New York')).toMatchSnapshot();
  });

  it('should add api data when passed an api data object', () => {
    expect(addApiData(strangerThings)).toMatchSnapshot();
  });

  it('should call addApiData, and pull show from correct api using the thunk', (done: Function) => {
    const dispatchMock = jest.fn();
    moxios.withMock(() => {
      getApiDetails(strangerThings.imdbID)(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: strangerThings
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${strangerThings.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addApiData(strangerThings));
          done();
        });
      });
    });
  });

});

