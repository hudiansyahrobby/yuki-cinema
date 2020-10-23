import React from 'react';
import { Link } from 'react-router-dom';
import { generatePublicPath } from '../../helpers/generatePublicPath';
export default function movie({ movie, onDelete }) {
  console.log(movie);
  return (
    <>
      {movie.map(({ image, title, _id }) => {
        return (
          <div key={_id}>
            <div className='rounded-md overflow-hidden' style={{ height: '20rem' }}>
              <img
                src={generatePublicPath(image)}
                alt={title}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='mt-3'>
              <h2 className='text-gray-600 text-center text-sm tracking-wider font-bold hover:text-gray-800 transition duration-300 ease-in-out'>
                <Link to={`/movies/${_id}`}>{title.toUpperCase()}</Link>
              </h2>
              {
                <div className='mt-3 text-center'>
                  <button
                    onClick={() => onDelete(_id)}
                    className='bg-primary hover:bg-red-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline'
                  >
                    Delete
                  </button>
                </div>
              }
            </div>
          </div>
        );
      })}
    </>
  );
}
