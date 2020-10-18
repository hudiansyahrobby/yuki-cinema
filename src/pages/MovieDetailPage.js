import { Stars } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMovieById } from '../actions/movieAction';
import Container from '../components/Container';
import Crew from '../components/Crew';
import Layout from '../components/Layout';
import MovieTop from '../components/MovieTop';
import Pills from '../components/Pill/Pills';
import Producer from '../components/Producer';
import Video from '../components/Video';

export default function MovieDetailPage() {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movie);

  const { id } = useParams();
  console.log(id);
  console.log(movie);
  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <div className='mt-24'>
        <Container>
          {movie.map(({ category, image, overview, rating, title }) => {
            return (
              <>
                <MovieTop image={image} title={title} />
                <Stars />

                <Producer />
                <div className='text-center mt-4'>
                  <button className='bg-gray-800 rounded-lg px-3 py-2 text-white uppercase font-extrabold tracking-wide'>
                    Buy Ticket
                  </button>
                </div>
                <Pills />

                <Video />
                <Crew />
              </>
            );
          })}
          ;
        </Container>
      </div>
    </Layout>
  );
}
