import * as TICKET from '../constants/ticketConstant';

const initialState = {
  ticket: [],
  error: '',
  success: '',
  loading: false,
};

export default function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case TICKET.ADD_TICKET_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case TICKET.ADD_TICKET_SUCCESS:
      state = {
        ...state,
        loading: false,
        success: action.payload.success,
        error: '',
        ticket: state.ticket.concat(action.payload.ticket),
      };
      break;
    case TICKET.ADD_TICKET_FAIL:
      state = {
        ...state,
        loading: false,
        success: '',
        error: action.payload.error,
      };
      break;
    case TICKET.GET_TICKET_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case TICKET.GET_TICKET_SUCCESS:
      state = {
        ...state,
        loading: false,
        ticket: action.payload.ticket,
      };
      break;
    case TICKET.GET_TICKET_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case TICKET.DELETE_TICKET_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case TICKET.DELETE_TICKET_SUCCESS:
      state = {
        ...state,
        loading: false,
        ticket: state.ticket.filter(({ _id }) => _id !== action.payload.id),
      };
      break;
    case TICKET.DELETE_TICKET_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case TICKET.DELETE_TICKET_FAIL:
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
