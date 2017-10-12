import axios from 'axios';

export function getApiDetails(imdbID: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addApiData(response.data));
      })
      .catch(err => {
        console.error('woopsie', err);
      });
  }
}
