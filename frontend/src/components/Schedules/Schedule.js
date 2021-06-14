import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import id from 'date-fns/locale/id';
import StarIcon from '@material-ui/icons/Star';

export default function Schedule({ schedule }) {
  const { date, movie, _id } = schedule;
  // const time = React.useMemo(() => {
  //   const timeFromHours = date.split('T');
  //   return timeFromHours[1].substring(0, 5);
  // }, [date]);

  return (
    <div className='flex mt-12 shadow-lg'>
      <div style={{ minWidth: '9rem' }} className='w-1/3 sm:w-1/4 h-64 md:w-1/5'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
          alt={movie.title}
          className='h-full w-full rounded-lg'
        />
      </div>
      <div className='ml-4 w-2/3'>
        <h2 className='text-gray-600 text-sm md:text-lg uppercase font-bold tracking-wider'>
          {movie.title}
        </h2>
        <div className='mt-2 flex items-center justify-start'>
          <StarIcon className='text-yellow-600' />
          <span className='ml-1 text-gray-600 font-bold'>{movie.rating}</span>
        </div>
        <div className='mt-3 flex items-center'>
          <AccessTimeIcon className='text-gray-600 mr-1' style={{ fontSize: '20px' }} />
          <span className='text-gray-600 text-sm md:text-base'>
            {format(new Date(date), 'HH:mm', { locale: id })}
          </span>
        </div>
        <p className='my-3 text-gray-600 text-xs md:text-sm'>
          {movie.overview.substring(0, 450) + '...'}
        </p>
        <Link
          className='bg-primary tracking-widest hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs'
          to={`/beli-tiket/${_id}`}
        >
          Beli Tiket
        </Link>
      </div>
    </div>
  );
}
