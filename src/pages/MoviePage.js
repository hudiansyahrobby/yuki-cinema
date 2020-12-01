import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovie, getMovies } from '../actions/movieAction';
// import Alert from '../components/Alert';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Movies from '../components/Movies/Movies';
import Search from '../components/Search';
import Spinner from '../components/Spinner/Spinner';

export default function MoviePage() {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movie);
  const { user } = useSelector((state) => state.user);

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
      {loading ? (
        <Spinner />
      ) : (
        <div className='mt-24'>
          <Container>
            <h1 className='text-4xl font-bold text-primary text-center tracking-wide'>
              Daftar Movie
            </h1>

            <Search />

            {user?.role === 'admin' && (
              <div className='flex justify-end mt-6'>
                <Link
                  className='p-2 bg-primary hover:bg-red-800 text-white font-bold text-sm tracking-widest rounded-lg transition duration-300 ease-out'
                  to='/tambah-movie'
                >
                  Tambah Movie
                </Link>
              </div>
            )}

            <div className='mt-6'>
              <Movies movie={movies} onDelete={onDeleteMovie} />
            </div>
          </Container>
        </div>
      )}
    </Layout>
  );
}
