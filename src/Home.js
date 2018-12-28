import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { HOME_PAGE } from './queries';
import Movie from './Movie';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>Home | MovieQL</title>
    </Helmet>
    <Query query={HOME_PAGE}>
    {
      ({loading, data, error}) => {
        if (loading) return <span>loading</span>;
        if (error) return <span>somethine happened</span>;

        return data.movies.map((movie) => {
          const { id, title, rating, medium_cover_image } = movie;

          return (
            <Movie
              key={id}
              id={id}
              title={title}
              rating={rating}
              poster={medium_cover_image}
            />
          );
        });
      }
    }
    </Query>
  </Container>
);

export default Home;