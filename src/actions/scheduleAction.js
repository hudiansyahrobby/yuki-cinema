import Axios from '../helpers/axios';
import * as SCHEDULE from '../constants/scheduleConstant';

export const addTime = (hour) => async (dispatch) => {
  dispatch({ type: SCHEDULE.ADD_TIME_INIT });
  try {
    const { data } = await Axios.post('/api/time', hour);
    dispatch({ type: SCHEDULE.ADD_TIME_SUCCESS, payload: { time: data.time } });
  } catch (error) {
    dispatch({ type: SCHEDULE.ADD_TIME_FAIL, payload: { error: error.message } });
  }
};

export const getTime = () => async (dispatch) => {
  dispatch({ type: SCHEDULE.GET_TIME_INIT });
  try {
    const { data } = await Axios.get('/api/time');
    console.log(data);
    dispatch({ type: SCHEDULE.GET_TIME_SUCCESS, payload: { time: data.time } });
  } catch (error) {
    dispatch({ type: SCHEDULE.GET_TIME_FAIL, payload: { error: error.message } });
  }
};

export const deleteTime = (id) => async (dispatch) => {
  dispatch({ type: SCHEDULE.DELETE_TIME_INIT });
  try {
    const { data } = await Axios.delete(`/api/time/${id}`);
    console.log(data);
    dispatch({ type: SCHEDULE.DELETE_TIME_SUCCESS, payload: { id } });
  } catch (error) {
    dispatch({ type: SCHEDULE.DELETE_TIME_FAIL, payload: { error: error.message } });
  }
};
