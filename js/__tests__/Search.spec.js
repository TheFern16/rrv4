import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setSearchTerm } from '../actionCreators';
import { store } from '../store';
import preload from '../../data.json';

// components
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={''}/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correct all of the shows', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('should render correct number of shows based on search', () => {
    const searchWord = 'black';
    store.dispatch(setSearchTerm(searchWord));

    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord}/> );

    const showCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`
      .toUpperCase()
      .indexOf(searchWord.toUpperCase()) >= 0).length;

    expect(component.find(ShowCard).length).toEqual(showCount);
  });

  it('should render correct amount of shows based on search from redux', () => {
    const searchWord = 'black';
    store.dispatch(setSearchTerm(searchWord));
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search shows={preload.shows} searchTerm={searchWord} />
        </MemoryRouter>
      </Provider>
    );
    const showCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`
      .toUpperCase()
      .indexOf(searchWord.toUpperCase()) >= 0).length;
    expect(component.find('.show-card').length).toEqual(showCount);
  });

})

