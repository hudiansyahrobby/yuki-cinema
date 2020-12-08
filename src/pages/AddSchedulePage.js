import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addSchedule } from '../actions/scheduleAction';
import Layout from '../components/Layout';
import { useHistory } from 'react-router';
import Spinner from '../components/Spinner/Spinner';
import DatePicker, { registerLocale } from 'react-datepicker';
import AsyncSelect from 'react-select/async';
import id from 'date-fns/locale/id';

import 'react-datepicker/dist/react-datepicker.css';
import Axios from 'axios';

export default function AddMoviePage() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  registerLocale('id', id);

  const history = useHistory();

  const filterMovies = async (inputValue) => {
    if (!inputValue) return;

    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=66077410754413f120dc3ac016897999&language=en-US&query=${inputValue}&include_adult=false`,
    );
    console.log(data.results);
    return data.results;
  };

  const movieOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterMovies(inputValue));
      }, 1000);
    });

  return (
    <Layout>
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
            <h2 className='mb-6 text-center text-gray-700 font-bold tracking-wider uppercase text-2xl'>
              Tambah Jadwal
            </h2>

            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='time'>
              Pilih Jam Penayangan
            </label>

            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              placeholderText='Pilih Jam Penayangan'
              timeIntervals={15}
              showTimeSelect
              timeCaption='Jam'
              locale='id'
              dateFormat='PPPPpp'
              timeFormat='hh:mm'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline block'
            />

            <label className='mt-4 block text-gray-700 text-sm font-bold mb-2' htmlFor='film'>
              Pilih Film
            </label>

            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={movieOptions}
              getOptionLabel={(e) =>
                e.original_title + ` ${e.release_date && `( ${e.release_date.split('-')[0]} )`}`
              }
              getOptionValue={(e) => e.id}
              placeholder='Pilih Film'
            />

            <button
              className='mt-4 block bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Tambah Jadwal
            </button>
          </Form>
        </Formik>
      </div>
      )
      {/* <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='time'>
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

              <ErrorMessage name='category' component='p' className='mt-2 text-red-600 text-sm' /> */}
    </Layout>
  );
}
