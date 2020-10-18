import * as CATEGORY from '../constants/categoryConstant';

const initialState = {
  category: [],
  message: '',
  loading: false,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY.ADD_CATEGORY_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case CATEGORY.ADD_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        category: state.category.concat(action.payload.category),
      };
      break;
    case CATEGORY.ADD_CATEGORY_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case CATEGORY.GET_CATEGORY_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case CATEGORY.GET_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        category: action.payload.category,
      };
      break;
    case CATEGORY.GET_CATEGORY_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case CATEGORY.DELETE_CATEGORY_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case CATEGORY.DELETE_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        category: state.category.filter(({ _id }) => _id !== action.payload.id),
      };
      break;
    case CATEGORY.DELETE_CATEGORY_FAIL:
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
