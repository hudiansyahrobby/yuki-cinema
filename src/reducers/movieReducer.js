import * as MOVIE from '../constants/movieConstant';

const initialState = {
  movies: [],
  movie: [],
  message: '',
  loading: false,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE.ADD_MOVIE_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MOVIE.ADD_MOVIE_SUCCESS:
      state = {
        ...state,
        loading: false,
        movie: state.movie.concat(action.payload.movie),
      };
      break;
    case MOVIE.ADD_MOVIE_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case MOVIE.GET_MOVIE_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MOVIE.GET_MOVIE_SUCCESS:
      state = {
        ...state,
        loading: false,
        movies: action.payload.movies,
      };
      break;
    case MOVIE.GET_MOVIE_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case MOVIE.DELETE_MOVIE_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MOVIE.DELETE_MOVIE_SUCCESS:
      state = {
        ...state,
        loading: false,
        movie: state.movie.filter(({ _id }) => _id !== action.payload.id),
      };
      break;
    case MOVIE.DELETE_MOVIE_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    default:
      return state;
  }
  return state;
}
