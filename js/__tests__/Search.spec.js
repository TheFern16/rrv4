import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';

// components
import Search from '../Search';
import ShowCard from '../ShowCard';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  it('should render correct all of the shows', () => {
    const component = shallow(<Search />);
    expect(preload.shows.length).toEqual(component.find(ShowCard).length)
  });

  xit('should render correct number of shows based on search', () => {

  });
})

