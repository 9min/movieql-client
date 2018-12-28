import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  margin: 40px 0;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0.19), 0 6px 6px rgba(0,0,0.23);
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
`;

const Title = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 25px;
  width: auto;
  margin: auto;
  padding: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0.19), 0 6px 6px rgba(0,0,0.23);
`;

const Movie = ({ id, title, rating, poster }) => (
  <Link to={`/details/${id}`}>
    <Card background={poster}>
      <Title>
        {title} / {rating}⭐️
      </Title>
    </Card>
  </Link>
);

Movie.propsTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
