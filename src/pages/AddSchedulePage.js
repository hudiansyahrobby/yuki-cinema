import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../actions/movieAction';
import { addSchedule, getTime } from '../actions/scheduleAction';
import Input from '../components/Input';
import Layout from '../components/Layout';
import { useHistory } from 'react-router';
import Spinner from '../components/Spinner/Spinner';

export default function AddMoviePage() {
  const dispatch = useDispatch();
  const { time } = useSelector((state) => state.schedule);
  const { movies, loading } = useSelector((state) => state.movie);
  const history = useHistory();
  useEffect(() => {
    dispatch(getTime());
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className='mt-32 px-5 md:px-10'>
          <Formik
            initialValues={{ time: '', date: '', movie: '' }}
            validationSchema={Yup.object({
              time: Yup.string().required('Required'),
              date: Yup.string().required('Required'),
              movie: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              dispatch(addSchedule(values, history));
              setSubmitting(false);
            }}
          >
            <Form className='bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'>
              <h2 className='text-center text-gray-700 font-bold tracking-wider uppercase text-2xl'>
                Add Schedule
              </h2>

              <Input
                id='time'
                name='time'
                as='select'
                label='Choose Time'
                data={time}
                placeholder='Enter time (Hour) ex: 09:00'
                option='Choose Time'
              />

              <Input id='date' type='date' label='Choose Date' name='date' />

              <Input
                id='movie'
                as='select'
                name='movie'
                label='Choose Movie'
                data={movies}
                placeholder='Choose Movie'
                option='Choose Movies'
              />

              <button
                className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Movie
              </button>
            </Form>
          </Formik>
        </div>
      )}
    </Layout>
  );
}
