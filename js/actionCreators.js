// @flow

import { SET_SEARCH_TERM } from './actions';

function setSearchTerm(searchTerm: string) {
  return { type: 'SET_SEARCH_TERM', payload: searchTerm };
}

export default setSearchTerm;