import React from 'react';
import Form from '../components/Form';
import Input from '../components/Input';
import Layout from '../components/Layout';

export default function AddSchedulePage() {
  return (
    <Layout>
      <div className='mt-32 px-5 md:px-10'>
        <Form title='Add Schedule'>
          <Input
            label='Add Schedule'
            id='hour'
            type='text'
            placeholder='Enter time (Hour) ex: 09:00'
          />
          <button
            className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Add Category
          </button>
        </Form>
      </div>
    </Layout>
  );
}
