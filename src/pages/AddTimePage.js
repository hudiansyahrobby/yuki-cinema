import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTime, getTime } from '../actions/scheduleAction';
import Form from '../components/Form';
import Input from '../components/Input';
import Layout from '../components/Layout';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTime } from '../actions/scheduleAction';

export default function AddTimePage() {
  const [hour, setHour] = useState('');
  const dispatch = useDispatch();
  const { time } = useSelector((state) => state.schedule);
  useEffect(() => {
    dispatch(getTime());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      hour,
    };
    dispatch(addTime(data));
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteTime(id));
  };
  return (
    <Layout>
      <div className='mt-32 px-5 md:px-10'>
        <Form title='Add Time' onSubmit={onSubmitHandler}>
          <Input
            label='Add Time (Hour)'
            id='hour'
            type='text'
            onChange={(e) => setHour(e.target.value)}
            placeholder='Enter time (Hour) ex: 09:00'
          />
          <button
            className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Add Time
          </button>
        </Form>

        <div className='mt-5 bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h2 className='mb-4 text-white'>Available Time</h2>
          <table className='table-auto'>
            <thead className='text-white'>
              <tr>
                <th className='px-4 py-2 border border-white'>No</th>
                <th className='px-4 py-2 border border-white'>Time</th>
                <th className='px-4 py-2 border border-white'>Action</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              {time?.map(({ _id, hour }, index) => (
                <tr key={_id}>
                  <td className='border px-4 py-2'>{index}</td>
                  <td className='border px-4 py-2'>{hour}</td>
                  <td className='border px-4 py-2 text-center' onClick={() => onDeleteHandler(_id)}>
                    <DeleteIcon className=' text-red-700 hover:text-red-900 cursor-pointer transition duration-300 ease-in-out' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
