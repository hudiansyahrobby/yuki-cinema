import * as MOVIE from '../constants/movieConstant';
import Axios from '../helpers/axios';

export const addMovie = (movie) => async (dispatch) => {
  dispatch({ type: MOVIE.ADD_MOVIE_INIT });
  try {
    const { data } = await Axios.post('/api/movie', movie, {
      headers: {
        'Content-Type': 'multipart/data',
      },
    });
    dispatch({ type: MOVIE.ADD_MOVIE_SUCCESS, payload: { movie: data.movie } });
  } catch (error) {
    dispatch({ type: MOVIE.ADD_MOVIE_FAIL, payload: { error: error.message } });
  }
};

export const getMovies = () => async (dispatch) => {
  dispatch({ type: MOVIE.GET_MOVIE_INIT });
  try {
    const { data } = await Axios.get('/api/movie');
    console.log(data);
    dispatch({ type: MOVIE.GET_MOVIE_SUCCESS, payload: { movies: data.movies } });
  } catch (error) {
    dispatch({ type: MOVIE.GET_MOVIE_FAIL, payload: { error: error.message } });
  }
};

export const getMovieById = (id) => async (dispatch) => {
  dispatch({ type: MOVIE.GET_MOVIE_BY_ID_INIT });
  try {
    const { data } = await Axios.get(`/api/movie/${id}`);
    console.log(data);
    dispatch({ type: MOVIE.ADD_MOVIE_SUCCESS, payload: { movie: data.movie } });
  } catch (error) {
    dispatch({ type: MOVIE.ADD_MOVIE_FAIL, payload: { error: error.message } });
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  dispatch({ type: MOVIE.DELETE_MOVIE_INIT });
  try {
    const { data } = await Axios.delete(`/api/movie/${id}`);
    console.log(data);
    dispatch({ type: MOVIE.DELETE_MOVIE_SUCCESS, payload: { id } });
  } catch (error) {
    dispatch({ type: MOVIE.DELETE_MOVIE_FAIL, payload: { error: error.message } });
  }
};
