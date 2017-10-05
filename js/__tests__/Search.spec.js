import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';

// components
import Search from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct all of the shows', () => {
  const component = shallow(<Search />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).legth);
});

test('Search should render correct number of shows based on search', () => {

});
