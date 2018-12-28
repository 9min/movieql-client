import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { MOVIE_DETAILS } from './queries';
import Movie from './Movie';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 40px 0 50px 0;
`;

const Card = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 7px;
  margin-right: 20px;
`;

const Image = Card.withComponent("img");

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: ${props => (props.bold ? "500" : "400")};
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 50px;
`;

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  return <Query query={MOVIE_DETAILS} variables={{ movieId: parseInt(movieId) }}>
    {
      ({loading, error, data}) => {
        if (loading) return <span>loading</span>;
        if (error) return <span>somethine happened</span>;

        const {
          title,
          rating,
          medium_cover_image,
          description_intro,
        } = data.movie;

        return (
          <Fragment>
            <Container>
              <Helmet>
                <title>{title} | MovieQL</title>
              </Helmet>
              <Image src={medium_cover_image} />
              <div>
                <Title>{title}</Title>
                <Paragraph bold>{rating}</Paragraph>
                <Paragraph>{description_intro}</Paragraph>
              </div>
            </Container>
            <Title>Suggested</Title>
            <MovieContainer>
              {
                data.suggestions.map((movie) => {
                  const {
                    id,
                    title,
                    rating,
                    medium_cover_image
                  } = movie;
                  return (
                    <Movie
                      key={id}
                      id={id}
                      title={title}
                      rating={rating}
                      poster={medium_cover_image}
                    />
                  );
                })
              }
            </MovieContainer>
            {title}
            {rating}
            {medium_cover_image}
            {description_intro}
          </Fragment>
        )
      }
    }
  </Query>
}

export default Detail;
