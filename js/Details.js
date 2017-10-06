// @flow
import React from 'react';
import axios from 'axios';
import Header from './Header';
import Spinner from './Spinner';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: {
        rating: ''
      }
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/${this.props.show.imdbID}`)
      .then((res: { data: { rating: string }}) => {
        this.setState({
          apiData: response.data
        });
      });
  }

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    return (
      <div className="details">
        <Header />
        <h1>svideo</h1>
        <section>
          <h1>{title}</h1>
          <h2>{(year)}</h2>
          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp; controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`} />
        </div>
      </div>
    )
  }
};

export default Details;