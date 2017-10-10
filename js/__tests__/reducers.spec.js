import reducers from '../reducers';

describe('SET_SEARCH_TERM', () => {

  it('given the input of black, state should equal the redux state search', () => {
    let state = reducers({ searchTerm:'', apiData:{} }, { type:'SET_SEARCH_TERM', payload:'black' });
    expect(state).toEqual({ searchTerm: 'black', apiData:{} });
  });

  it ('should have a length of two when user inputs west into the search bar', () => {
    let state = reducers({ searchTerm: '', apiData: {} }, { type: 'SET_SEARCH_TERM', payload: 'west' });
    expect(state).toEqual({ searchTerm: 'west', apiData: {} });
  });
});