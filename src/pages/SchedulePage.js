import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getScheduleByDate } from '../actions/scheduleAction';
import Schedules from '../components/Schedules/Schedules';
import { getTodayDate, getTomorrowDate } from '../helpers/getDate';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';

export default function SchedulePage() {
  const { scheduleByDate, loading } = useSelector((state) => state.schedule);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const today = getTodayDate();
  const tomorrow = getTomorrowDate();

  useEffect(() => {
    dispatch(getScheduleByDate(today));
  }, [dispatch, today]);

  const onGetScheduleHandler = (date) => {
    dispatch(getScheduleByDate(date));
  };
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className='mt-32'>
          <Container>
            <h1 className='text-center text-gray-700 font-bold tracking-wider uppercase text-3xl md:text-4xl'>
              Jadwal Bioskop
            </h1>
            <div className='mt-4 text-center'>
              <button
                className='mr-2 text-gray-600 p-2 bg-info font-bold text-sm tracking-widest rounded-lg hover:text-gray-800 transition duration-300 ease-out'
                onClick={() => onGetScheduleHandler(today)}
              >
                Hari Ini
              </button>
              <button
                className='text-gray-600 p-2 bg-info font-bold text-sm tracking-widest rounded-lg hover:text-gray-800 transition duration-300 ease-out'
                onClick={() => onGetScheduleHandler(tomorrow)}
              >
                Besok
              </button>
            </div>
            {user?.role === 'admin' && (
              <div className='flex justify-end'>
                <Link
                  className='p-2 bg-primary hover:bg-red-800 text-white font-bold text-xs tracking-widest rounded-lg transition duration-300 ease-out'
                  to='/tambah-jadwal'
                >
                  Tambah Jadwal
                </Link>
              </div>
            )}

            <Schedules data={scheduleByDate} />
          </Container>
        </div>
      )}
    </Layout>
  );
}
