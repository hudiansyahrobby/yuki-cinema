import React from 'react';

export default function Input({ label, id, placeholder, type, as, onChange }) {
  if (as === 'select') {
    return (
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
          {label}
        </label>
        <div className='relative'>
          <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
            <option>Really long option that will likely overlap the chevron</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg
              className='fill-current h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
      </div>
    );
  } else if (as === 'textarea') {
    return (
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
          {label}
        </label>
        <textarea
          id={id}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline h-48'
        ></textarea>
      </div>
    );
  } else if (as === 'file') {
    return (
      <div className='mb-4 w-full'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
          {label}
        </label>
        <div className='w-64 flex flex-col items-center px-4 py-6 bg-white text-info rounded-lg shadow-lg tracking-wide uppercase border border-info cursor-pointer hover:bg-info hover:text-gray-200'>
          <svg
            className='w-8 h-8'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
          </svg>
          <span className='mt-2 text-base leading-normal'>Select a file</span>
          <input type='file' className='hidden' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
          {label}
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
          id={id}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
