import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../actions/movieAction';
import { addSchedule, addTime, getTime } from '../actions/scheduleAction';
import Input from '../components/Input';
import Layout from '../components/Layout';
import { useHistory } from 'react-router';
import Spinner from '../components/Spinner/Spinner';
import CreatableSelect from 'react-select/creatable';

export default function AddMoviePage() {
  const dispatch = useDispatch();
  const { time, loading: isTimeLoading } = useSelector((state) => state.schedule);
  const { movies, loading } = useSelector((state) => state.movie);
  const history = useHistory();
  useEffect(() => {
    dispatch(getTime());
    dispatch(getMovies());
  }, [dispatch]);

  const timeOptions = time?.map((time) => ({
    value: time._id,
    label: time.hour,
  }));

  const handleCreateTime = (hour) => {
    const timeData = {
      hour,
    };
    dispatch(addTime(timeData));
  };
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className='mt-32 px-5 md:px-10'>
          <Formik
            initialValues={{ time: '', date: '', movie: '' }}
            validationSchema={Yup.object({
              time: Yup.string().required('Harus Diisi'),
              date: Yup.string().required('Harus Diisi'),
              movie: Yup.string().required('Harus Diisi'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              dispatch(addSchedule(values, history));
              setSubmitting(false);
            }}
          >
            <Form className='bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'>
              <h2 className='text-center text-gray-700 font-bold tracking-wider uppercase text-2xl'>
                Tambah Jadwal
              </h2>

              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='time'>
                Pilih Jam Penayangan
              </label>
              <Field
                name='time'
                component={({ field, form }) => (
                  <CreatableSelect
                    isClearable
                    isDisabled={isTimeLoading}
                    isLoading={isTimeLoading}
                    formatCreateLabel={(inputValue) => `Buat "${inputValue}"`}
                    onChange={(option) => form.setFieldValue(field.name, option.value)}
                    placeholder='Pilih Jam Penayangan'
                    onCreateOption={handleCreateTime}
                    options={timeOptions}
                    value={
                      timeOptions ? timeOptions.find((option) => option.value === field.value) : ''
                    }
                    onBlur={field.onBlur}
                  />
                )}
              />

              <ErrorMessage name='category' component='p' className='mt-2 text-red-600 text-sm' />

              <Input id='date' type='date' label='Pilih Tanggal Penayangan' name='date' />

              <Input
                id='movie'
                as='select'
                name='movie'
                label='Pilih Movie'
                data={movies}
                placeholder='Pilih Movie'
                option='Pilih Movie'
              />

              <button
                className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Tambah Jadwal
              </button>
            </Form>
          </Formik>
        </div>
      )}
    </Layout>
  );
}
