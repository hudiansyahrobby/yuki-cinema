import React from 'react';
import { generatePublicPath } from '../helpers/generatePublicPath';

export default function MovieTop({ image, title }) {
  return (
    <div>
      <div className='w-64 text-center mx-auto'>
        <img
          // src={generatePublicPath(image)}
          src={image}
          alt={title}
          className='object-contain mx-auto w-full h-full rounded-lg'
        />
      </div>
    </div>
  );
}
