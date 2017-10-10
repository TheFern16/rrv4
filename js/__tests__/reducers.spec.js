import reducers from '../reducers';

describe('SET_SEARCH_TERM', () => {

  it('given the input of black, state should equal the redux state search', () => {
    const state = reducers({ searchTerm:'', apiData:{} }, { type:'SET_SEARCH_TERM', payload:'black' });
    expect(state).toEqual({ searchTerm: 'black', apiData:{} });
  });

  it ('should have a length of two when user inputs west into the search bar', () => {
    const state = reducers({ searchTerm: '', apiData: {} }, { type: 'SET_SEARCH_TERM', payload: 'west' });
    expect(state).toEqual({ searchTerm: 'west', apiData: {} });
  });

  it('api data should be equal to queries clicks made on the desc by the user', () => {
    const state = reducers({ searchTerm:'',apiData:{} }, { type:'ADD_API_DATA', payload: {rating:'2.3', title:'House of Cards', year:'2013–', description: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',poster: 'hoc.jpg', imdbID:'tt1856010', trailer: 'NTzycsqxYJ0'}});
    expect(state).toEqual({ searchTerm:'', apiData: { tt1856010: { rating:'2.3', title:'House of Cards', year: '2013–', description: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.', poster: 'hoc.jpg',imdbID: 'tt1856010', trailer: 'NTzycsqxYJ0'}}});
  });
});

