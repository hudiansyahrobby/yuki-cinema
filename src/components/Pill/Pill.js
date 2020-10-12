import React from 'react';

export default function Pill({ category }) {
  return (
    <span className='px-4 py-2 rounded-full bg-info text-gray-300 tracking-wider mr-2'>
      {category}
    </span>
  );
}
