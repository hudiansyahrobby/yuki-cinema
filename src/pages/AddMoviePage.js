import React from 'react';
import Form from '../components/Form';
import Input from '../components/Input';
import Layout from '../components/Layout';

export default function AddMoviePage() {
  return (
    <Layout>
      <div className='mt-32 px-5 md:px-10'>
        <Form title='Add Movie'>
          <Input label='Title' id='title' type='text' placeholder='Enter movie title' />
          <Input label='Rating' id='rating' type='number' placeholder='Enter movie rating' />
          <Input label='Category' id='category' as='select' />
          <Input label='Overview' id='overview' as='textarea' />
          <Input label='Add Image' id='image' as='file' />
          <button
            className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Add Movie
          </button>
        </Form>
      </div>
    </Layout>
  );
}
