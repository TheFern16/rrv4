import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`


const ShowCard = props =>
  <div className="show-card">
    <img alt={`${props.show.title} Show Poster`} src={`/img/posters/${props.show.poster}`} />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </div>

ShowCard.propTypes = {
  show: shape({
    poster: string.isRequried,
    title: string.isRequried,
    year: string.isRequried,
    description: string.isRequried
  }).isRequried
}

export default ShowCard;