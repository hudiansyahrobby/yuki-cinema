import React from 'react';
import { Link } from 'react-router-dom';

export default function movie({ movies, onDelete }) {
  return (
    <>
      {movies?.map(({ poster_path, title, id }) => {
        if (poster_path) {
          return (
            <div key={id}>
              <div className='rounded-md overflow-hidden' style={{ height: '18rem' }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  className='w-full h-full'
                />
              </div>
              <div className='mt-3'>
                <h2 className='text-gray-600 text-center text-sm tracking-wider font-bold hover:text-gray-800 transition duration-300 ease-in-out'>
                  <Link to={`/movies/${id}`}>{title.toUpperCase()}</Link>
                </h2>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
