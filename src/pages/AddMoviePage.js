import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../actions/categoryAction';
import { addMovie } from '../actions/movieAction';
import Form from '../components/Form';
import Input from '../components/Input';
import Layout from '../components/Layout';

export default function AddMoviePage() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [overview, setOverview] = useState('');
  const [image, setImage] = useState('');
  const { category: _category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  console.log('image', image);
  console.log('category', category);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const movieData = new FormData();
    movieData.append('title', title);
    movieData.append('rating', rating);
    movieData.append('category', category);
    movieData.append('overview', overview);
    movieData.append('image', image);

    dispatch(addMovie(movieData));
  };
  return (
    <Layout>
      <div className='mt-32 px-5 md:px-10'>
        <Form title='Add Movie' onSubmit={onSubmitHandler} encType='multipart/form-data'>
          <Input
            label='Title'
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter movie title'
          />
          <Input
            label='Rating'
            id='rating'
            type='number'
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            placeholder='Enter movie rating'
          />
          <Input
            label='Category'
            id='category'
            as='select'
            onChange={(e) => setCategory(e.target.value)}
            data={_category}
            option='Choose category'
          />
          <Input
            label='Overview'
            id='overview'
            as='textarea'
            onChange={(e) => setOverview(e.target.value)}
          />
          <Input
            label='Add Image'
            id='image'
            as='file'
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button
            className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Add Movie
          </button>
        </Form>
      </div>
    </Layout>
  );
}
