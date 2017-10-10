// @flow

import { setSearchTerm, addApiData } from '../actionCreators';

describe('actionCreators', () => {
  it('should render ', () => {
    expect(setSearchTerm('New York')).toMatchSnapshot();
  });
});