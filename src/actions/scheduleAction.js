import Axios from '../helpers/axios';
import * as SCHEDULE from '../constants/scheduleConstant';

export const addTime = (hour) => async (dispatch) => {
  dispatch({ type: SCHEDULE.ADD_TIME_INIT });
  try {
    const { data } = await Axios.post('/api/time', hour);
    dispatch({
      type: SCHEDULE.ADD_TIME_SUCCESS,
      payload: { time: data.time, success: data.message },
    });
  } catch (error) {
    dispatch({ type: SCHEDULE.ADD_TIME_FAIL, payload: { error: error.response.data.message } });
  }
};

export const getTime = () => async (dispatch) => {
  dispatch({ type: SCHEDULE.GET_TIME_INIT });
  try {
    const { data } = await Axios.get('/api/time');
    console.log(data);
    dispatch({ type: SCHEDULE.GET_TIME_SUCCESS, payload: { time: data.time } });
  } catch (error) {
    dispatch({ type: SCHEDULE.GET_TIME_FAIL, payload: { error: error.response.data.message } });
  }
};

export const deleteTime = (id) => async (dispatch) => {
  dispatch({ type: SCHEDULE.DELETE_TIME_INIT });
  try {
    const { data } = await Axios.delete(`/api/time/${id}`);
    console.log(data);
    dispatch({ type: SCHEDULE.DELETE_TIME_SUCCESS, payload: { id } });
  } catch (error) {
    dispatch({ type: SCHEDULE.DELETE_TIME_FAIL, payload: { error: error.response.data.message } });
  }
};

export const addSchedule = (schedule, history) => async (dispatch) => {
  console.log(schedule);
  dispatch({ type: SCHEDULE.ADD_SCHEDULE_INIT });
  try {
    const { data } = await Axios.post('/api/schedule', schedule);
    console.log(data);
    dispatch({
      type: SCHEDULE.ADD_SCHEDULE_SUCCESS,
      payload: { schedule: data.schedule, success: data.message },
    });
    history.push('/schedule');
  } catch (error) {
    dispatch({ type: SCHEDULE.ADD_SCHEDULE_FAIL, payload: { error: error.response.data.message } });
  }
};

export const getAllSchedule = () => async (dispatch) => {
  dispatch({ type: SCHEDULE.GET_ALL_SCHEDULE_INIT });
  try {
    const { data } = await Axios.get(`/api/schedule`);
    console.log('ALL SCHEDULE', data);
    dispatch({ type: SCHEDULE.GET_ALL_SCHEDULE_SUCCESS, payload: { schedules: data.schedules } });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SCHEDULE.GET_ALL_SCHEDULE_FAIL,
      payload: { error: error.response.data.message },
    });
  }
};

export const getScheduleByDate = (date) => async (dispatch) => {
  dispatch({ type: SCHEDULE.GET_SCHEDULE_BY_DATE_INIT });
  try {
    const { data } = await Axios.get(`/api/schedule/${date}`);
    console.log(data);
    dispatch({
      type: SCHEDULE.GET_SCHEDULE_BY_DATE_SUCCESS,
      payload: { schedule: data.schedule },
    });
  } catch (error) {
    dispatch({
      type: SCHEDULE.GET_SCHEDULE_BY_DATE_FAIL,
      payload: { error: error.response.data.message },
    });
  }
};

export const getScheduleById = (id) => async (dispatch) => {
  dispatch({ type: SCHEDULE.GET_SCHEDULE_BY_ID_INIT });
  try {
    const { data } = await Axios.get(`/api/schedule/show/${id}`);
    console.log(data);
    dispatch({
      type: SCHEDULE.GET_SCHEDULE_BY_ID_SUCCESS,
      payload: { schedule: data.schedule },
    });
  } catch (error) {
    dispatch({
      type: SCHEDULE.GET_SCHEDULE_BY_ID_FAIL,
      payload: { error: error.response.data.message },
    });
  }
};

export const resetSchedule = () => async (dispatch) => {
  dispatch({ type: SCHEDULE.RESET_SCHEDULE });
};
