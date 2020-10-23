import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../actions/categoryAction';
import { addMovie, resetMovie } from '../actions/movieAction';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Layout from '../components/Layout';
import Input from '../components/Input';
import { useHistory } from 'react-router';
import Alert from '../components/Alert';

export default function AddMoviePage() {
  const [image, setImage] = useState('');

  const { category } = useSelector((state) => state.category);
  const { success, error } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <Layout>
      <div className='mt-32 px-5 md:px-10'>
        <Formik
          initialValues={{ title: '', rating: '', category: '', overview: '' }}
          validationSchema={Yup.object({
            title: Yup.string().required('Required'),
            rating: Yup.number()
              .positive('Must be positive number')
              .max(10, 'Must at least less than 10')
              .required('Required'),
            category: Yup.string().required('Required'),
            overview: Yup.string()
              .min(150, 'Must have at least 150 characters')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const movieData = new FormData();
            movieData.append('title', values.title);
            movieData.append('rating', values.rating);
            movieData.append('category', values.category);
            movieData.append('overview', values.overview);
            movieData.append('image', image);

            dispatch(addMovie(movieData, history));
            setSubmitting(false);
            setTimeout(() => {
              dispatch(resetMovie());
            }, 5000);
          }}
        >
          <Form className='bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-center text-gray-700 font-bold tracking-wider uppercase text-2xl'>
              Add Movie
            </h2>

            {success ? (
              <Alert
                message={success}
                success={success}
                onRemoveAlert={() => dispatch(resetMovie())}
              />
            ) : null}
            {error ? (
              <Alert
                message={error}
                success={success}
                onRemoveAlert={() => dispatch(resetMovie())}
              />
            ) : null}

            <Input
              name='title'
              type='text'
              id='title'
              placeholder='Enter movie title'
              label='Title'
            />
            <Input
              name='rating'
              type='number'
              id='rating'
              placeholder='Enter movie rating'
              label='Rating'
            />
            <Input
              label='Category'
              id='category'
              name='category'
              as='select'
              data={category}
              option='Choose category'
            />

            <Input label='Overview' id='overview' as='textarea' name='overview' />

            <Input
              label='Add Image'
              id='image'
              as='file'
              accept='image/*'
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image && (
              <img src={URL.createObjectURL(image)} alt='' className='w-40 h-48 mb-4 rounded-lg' />
            )}

            <button
              className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Add Movie
            </button>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
