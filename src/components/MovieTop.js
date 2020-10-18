import React from 'react';
import { generatePublicPath } from '../helpers/generatePublicPath';

export default function MovieTop({ image, title }) {
  return (
    <div>
      <div>
        <img src={generatePublicPath(image)} alt={title} className='object-contain mx-auto' />
      </div>
      <div className='content text-center mt-4'>
        <h2 className='text-gray-600 text-xl font-extrabold'>{title}</h2>
      </div>
    </div>
  );
}
