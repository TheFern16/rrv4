// @flow
import React from 'react';

// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: Show) => {
  return (
    <Wrapper to={`/details/${props.show.imdbID}`}>
      <Image
        alt={`${props.show.title} Show Poster`}
        src={`/img/posters/${props.show.poster}`} />
      <div>
        <h3>{props.show.title}</h3>
        <h4>({props.show.year})</h4>
        <p>{props.show.description}</p>
      </div>
    </Wrapper>
  )
}

// ShowCard.propTypes = {
//   show: PropTypes.shape({
//     description: PropTypes.string.isRequried,
//     imdbID: PropTypes.string.isRequried,
//     poster: PropTypes.string.isRequried,
//     title: PropTypes.string.isRequried,
//     trailer: PropTypes.string.isRequried,
//     year: PropTypes.string.isRequried
//   })
// }

export default ShowCard;