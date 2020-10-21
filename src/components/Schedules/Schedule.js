import React from 'react';
import Stars from '../../components/Stars';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { generatePublicPath } from '../../helpers/generatePublicPath';
import { Link } from 'react-router-dom';

export default function Schedule({ schedule }) {
  console.log(schedule);
  const { time, date, movie, _id } = schedule;
  return (
    <div className='flex mt-12 shadow-lg'>
      <div style={{ minWidth: '9rem' }} className='w-1/3 sm:w-1/4 h-64 md:w-1/5'>
        <img
          src={generatePublicPath(movie.image)}
          alt={movie.title}
          className='h-full w-full rounded-lg'
        />
      </div>
      <div className='ml-4 w-2/3'>
        <h2 className='text-gray-600 text-sm md:text-lg uppercase font-bold tracking-wider'>
          {movie.title}
        </h2>
        <Stars rating={movie.rating} />
        <div className='mt-3 flex items-center'>
          <AccessTimeIcon className='text-gray-600 mr-1' style={{ fontSize: '20px' }} />
          <span className='text-gray-600 text-sm md:text-base'>{time.hour}</span>
        </div>
        <p className='my-3 text-gray-600 text-xs md:text-sm'>{movie.overview}</p>
        <Link
          className='bg-primary tracking-widest hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs'
          to={`/buy-ticket/${_id}`}
        >
          Book Ticket
        </Link>
      </div>
    </div>
  );
}
