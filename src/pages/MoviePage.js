import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovies } from '../actions/movieAction';
// import Alert from '../components/Alert';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Movies from '../components/Movies/Movies';
import Search from '../components/Search';

export default function MoviePage() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);

  const onDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  // console.log('SCUCCESS', success);
  useEffect(() => {
    dispatch(getMovies());

    // if (success) {
    //   setTimeout(() => {
    //     dispatch(resetMovie());
    //   }, 5000);
    // }
  }, [dispatch]);

  return (
    <Layout>
      <div className='mt-24'>
        <Container>
          <h1 className='text-4xl font-bold text-primary text-center tracking-wide'>Our Movies</h1>

          {/* {success ? (
            <Alert
              message={success}
              success={success}
              onRemoveAlert={() => dispatch(resetMovie())}
            />
          ) : null} */}

          <Search />

          <div className='mt-8'>
            <Movies movie={movies} onDelete={onDeleteMovie} />
          </div>
        </Container>
      </div>
    </Layout>
  );
}
