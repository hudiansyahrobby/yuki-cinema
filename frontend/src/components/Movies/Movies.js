import React from 'react';
import Movie from './Movie';

export default function Movies({ movies, onDelete }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 justify-center md:mr-2 w-full'>
      <Movie movies={movies} onDelete={onDelete} />
    </div>
  );
}
