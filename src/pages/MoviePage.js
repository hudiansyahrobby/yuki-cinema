import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovie } from '../actions/movieAction';
// import Alert from '../components/Alert';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Movies from '../components/Movies/Movies';
import Search from '../components/Search';

export default function MoviePage(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [movies, setMovies] = useState([]);

  const onDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  const query = new URLSearchParams(props.location.search);
  const page = query.get('page') || 1;

  const URLAPI = `https://api.themoviedb.org/3/movie/popular?api_key=66077410754413f120dc3ac016897999&language=en-US&page=${page}`;

  useEffect(() => {
    Axios.get(URLAPI)
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, [dispatch, URLAPI]);

  console.log('MOVIES', movies);
  return (
    <Layout>
      <div className='mt-24'>
        <Container>
          <h1 className='text-4xl font-bold text-primary text-center tracking-wide'>
            Daftar Movie
          </h1>

          <Search />

          <div className='mt-6'>
            <Movies movies={movies} onDelete={onDeleteMovie} />
          </div>
        </Container>
      </div>
    </Layout>
  );
}
