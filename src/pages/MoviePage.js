import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../actions/movieAction';
// import Alert from '../components/Alert';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Movies from '../components/Movies/Movies';
import Search from '../components/Search';
import { useHistory } from 'react-router';

export default function MoviePage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

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
        console.log('DATA', data);
        setMovies(data);
      })
      .catch((error) => console.log(error));
  }, [dispatch, URLAPI]);

  const onHandlePagination = (event) => {
    const pageNumber = +event.selected;
    console.log('PAGENUMBER', pageNumber);
    history.push(`movies?page=${pageNumber + 1}`);
  };

  return (
    <Layout>
      <div className='mt-24'>
        <Container>
          <h1 className='text-4xl font-bold text-primary text-center tracking-wide'>
            Daftar Movie
          </h1>

          <Search />

          <div className='mt-6'>
            <Movies movies={movies.results} onDelete={onDeleteMovie} />
            {movies.total_pages !== 0 && (
              <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                pageCount={movies.total_pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={4}
                onPageChange={onHandlePagination}
                pageClassName={'mr-2 text-gray-500 px-2'}
                previousClassName={'mr-2 text-gray-500'}
                nextClassName={'text-gray-500'}
                containerClassName={
                  'mb-8 flex justify-center mt-8 py-3 text-sm bg-gray-900 rounded-md font-bold'
                }
                activeClassName={'text-gray-900 bg-gray-300 rounded-md'}
                forcePage={+page - 1}
              />
            )}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
