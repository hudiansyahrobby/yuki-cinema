import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import Input from '../components/Input';
import Layout from '../components/Layout';
import DeleteIcon from '@material-ui/icons/Delete';
import { addCategory, deleteCategory, getCategory } from '../actions/categoryAction';

export default function AddCategoryPage() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
    };
    dispatch(addCategory(data));
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteCategory(id));
  };
  return (
    <Layout>
      <div className='mt-32 px-5 md:px-10'>
        <Form title='Add Category' onSubmit={onSubmitHandler}>
          <Input
            label='Add Category'
            id='category'
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter category title'
          />
          <button
            className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Add Category
          </button>
        </Form>

        <div className='mt-5 bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h2 className='mb-4 text-white'>Available Category</h2>
          <table className='table-auto'>
            <thead className='text-white'>
              <tr>
                <th className='px-4 py-2 border border-white'>No</th>
                <th className='px-4 py-2 border border-white'>Category</th>
                <th className='px-4 py-2 border border-white'>Action</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              {category?.map(({ _id, title }, index) => (
                <tr key={_id}>
                  <td className='border px-4 py-2'>{index + 1}</td>
                  <td className='border px-4 py-2'>{title.toUpperCase()}</td>
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
