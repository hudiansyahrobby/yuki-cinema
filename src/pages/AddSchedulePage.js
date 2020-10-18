import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTime } from '../actions/scheduleAction';
import Form from '../components/Form';
import Input from '../components/Input';
import Layout from '../components/Layout';

export default function AddSchedulePage() {
  const dispatch = useDispatch();
  const { time } = useSelector((state) => state.schedule);
  useEffect(() => {
    dispatch(getTime());
  }, [dispatch]);
  return (
    <Layout>
      <div className='mt-32 px-5 md:px-10'>
        <Form title='Add Schedule'>
          <Input
            id='time'
            as='select'
            label='Choose Time'
            data={time}
            placeholder='Enter time (Hour) ex: 09:00'
          />
          <Input id='date' type='date' label='Choose Time' data={time} />
          <button
            className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Add Schedule
          </button>
        </Form>
      </div>
    </Layout>
  );
}
