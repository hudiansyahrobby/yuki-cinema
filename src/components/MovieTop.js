import React from 'react';

export default function MovieTop() {
  return (
    <div>
      <div>
        <img
          src='https://image.tmdb.org/t/p/w220_and_h330_face/fyy1nDC8wm553FCiBDojkJmKLCs.jpg'
          alt=''
          className='object-contain mx-auto'
        />
      </div>
      <div className='content text-center mt-4'>
        <h2 className='text-gray-600 text-xl font-extrabold'>Avenger End Game</h2>
      </div>
    </div>
  );
}
