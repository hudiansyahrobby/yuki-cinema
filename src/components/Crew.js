import React from 'react';

export default function Crew() {
  return (
    <div>
      <h2 className='text-xl font-bold text-gray-600'>Cast & Crew</h2>
      <div className='mt-8 grid grid-cols-4'>
        <div className='h-40 w-24'>
          <div className='rounded-lg overflow-hidden'>
            <img
              src='https://image.tmdb.org/t/p/w220_and_h330_face/fyy1nDC8wm553FCiBDojkJmKLCs.jpg'
              alt=''
              className='object-cover h-full w-full'
            />
          </div>
          <div className='mt-2'>
            <h2 className='font-bold text-gray-600 text-sm text-center'>Ryan Vernandez</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
