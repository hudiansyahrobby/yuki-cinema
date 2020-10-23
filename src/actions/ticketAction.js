import * as TICKET from '../constants/ticketConstant';
import Axios from '../helpers/axios';

export const addTicket = (ticket) => async (dispatch) => {
  console.log('TICKET', ticket);
  dispatch({ type: TICKET.ADD_TICKET_INIT });
  try {
    const { data } = await Axios.post('/api/ticket', ticket);
    dispatch({ type: TICKET.ADD_TICKET_SUCCESS, payload: { ticket: data.ticket } });
  } catch (error) {
    dispatch({ type: TICKET.ADD_TICKET_FAIL, payload: { error: error.message } });
  }
};

export const getTicket = () => async (dispatch) => {
  dispatch({ type: TICKET.GET_TICKET_INIT });
  try {
    const { data } = await Axios.get('/api/ticket');
    console.log(data);
    dispatch({ type: TICKET.GET_TICKET_SUCCESS, payload: { ticket: data.ticket } });
  } catch (error) {
    dispatch({ type: TICKET.GET_TICKET_FAIL, payload: { error: error.message } });
  }
};

export const deleteTicket = (id) => async (dispatch) => {
  dispatch({ type: TICKET.DELETE_TICKET_INIT });
  try {
    const { data } = await Axios.delete(`/api/TICKET/${id}`);
    console.log(data);
    dispatch({ type: TICKET.DELETE_TICKET_SUCCESS, payload: { id } });
  } catch (error) {
    dispatch({ type: TICKET.DELETE_TICKET_FAIL, payload: { error: error.message } });
  }
};
