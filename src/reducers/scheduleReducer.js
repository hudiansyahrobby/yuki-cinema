import * as SCHEDULE from '../constants/scheduleConstant';

const initialState = {
  time: [],
  schedule: [],
  message: '',
  loading: false,
};

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case SCHEDULE.ADD_TIME_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.ADD_TIME_SUCCESS:
      state = {
        ...state,
        loading: false,
        time: state.time.concat(action.payload.time),
      };
      break;
    case SCHEDULE.ADD_TIME_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case SCHEDULE.GET_TIME_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.GET_TIME_SUCCESS:
      state = {
        ...state,
        loading: false,
        time: action.payload.time,
      };
      break;
    case SCHEDULE.GET_TIME_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case SCHEDULE.DELETE_TIME_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.DELETE_TIME_SUCCESS:
      state = {
        ...state,
        loading: false,
        time: state.time.filter(({ _id }) => _id !== action.payload.id),
      };
      break;
    case SCHEDULE.DELETE_TIME_FAIL:
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
