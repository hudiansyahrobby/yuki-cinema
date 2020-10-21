import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMovieById } from '../actions/movieAction';
import Container from '../components/Container';
import Layout from '../components/Layout';
import MovieTop from '../components/MovieTop';
import Pills from '../components/Pill/Pills';
import Producer from '../components/Producer';
import Stars from '../components/Stars';
import StoryLine from '../components/StoryLine';
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
          {movie.map(({ category, image, overview, rating, title, _id }) => {
            return (
              <React.Fragment key={_id}>
                <div className='grid sm:grid-cols-2'>
                  <div>
                    <MovieTop image={image} title={title} />
                  </div>
                  <div className='ml-4'>
                    <div className='content text-center sm:text-left mt-4'>
                      <h2 className='text-gray-600 text-xl font-extrabold'>
                        {title.toUpperCase()}
                      </h2>
                    </div>
                    <Stars rating={rating} />
                    <Producer />

                    <Pills />
                    <div className='text-center sm:text-left mt-8'>
                      <button className='bg-gray-800 hover:bg-gray-900 rounded-lg px-3 py-2 text-white uppercase font-extrabold tracking-wide transition duration-300 ease-in-out'>
                        Buy Ticket
                      </button>
                    </div>
                  </div>
                </div>

                <Video />
                <StoryLine overview={overview} />
              </React.Fragment>
            );
          })}
          ;
        </Container>
      </div>
    </Layout>
  );
}
