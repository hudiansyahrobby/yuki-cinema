import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getScheduleById } from '../actions/scheduleAction';
import Layout from '../components/Layout';
import MovieTop from '../components/MovieTop';

export default function BuyTicketPage() {
  const { scheduleById } = useSelector((state) => state.schedule);
  const [bookedSeat, setBookedSeat] = useState('');
  console.log('BOOKED SEAT ID', bookedSeat);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getScheduleById(id));
  }, []);

  const seats = scheduleById?.seat?.map(({ _id, number, booked }, index) => {
    if (
      number === '6' ||
      number === '12' ||
      number === '20' ||
      number === '28' ||
      number === '36' ||
      number === '44' ||
      number === '52'
    ) {
      return (
        <Fragment key={_id}>
          <button
            className={`w-8 h-8 inline-flex rounded-lg items-center justify-center mr-2 p-2 transition duration-300 ease-in-out  ${
              !booked
                ? bookedSeat === _id
                  ? 'bg-white'
                  : 'bg-secondary text-gray-100 hover:bg-indigo-700'
                : 'bg-primary text-gray-100 hover:bg-red-700'
            } `}
            disabled={booked}
            onClick={() => setBookedSeat(_id)}
          >
            {number}
          </button>
          <div className='mt-6'></div>
        </Fragment>
      );
    } else {
      return (
        <button
          className={`w-8 h-8 inline-flex rounded-lg items-center justify-center mr-2 p-2 transition duration-300 ease-in-out  ${
            !booked
              ? // render class name depend one seat that will be booked
                bookedSeat === _id
                ? 'bg-white'
                : 'bg-secondary text-gray-100 hover:bg-indigo-700'
              : 'bg-primary text-gray-100 hover:bg-red-700'
          } `}
          onClick={() => setBookedSeat(_id)}
          disabled={booked}
          key={_id}
        >
          {number}
        </button>
      );
    }
  });

  // const array = [6, 6, 8, 8, 8, 8, 8, 8];
  // const seats = array.map((rating) => {
  //   const roundedRating = [...Array(rating).keys()];
  //   return roundedRating.map((_, index) => {
  //     if (index === roundedRating.length - 1) {
  //       return (
  //         <>
  //           <button className='w-8 h-8 inline-flex rounded-lg items-center justify-center bg-secondary text-gray-100 mr-2 p-2 hover:bg-indigo-700 transition duration-300 ease-in-out'>
  //             1
  //           </button>
  //           <div className='mt-6'></div>
  //         </>
  //       );
  //     }
  //     return (
  //       <button className='w-8 h-8 inline-flex rounded-lg items-center justify-center bg-secondary text-gray-100 mr-2 p-2 hover:bg-indigo-700 transition duration-300 ease-in-out'>
  //         1
  //       </button>
  //     );
  //   });
  // });
  // console.log(seats);

  return (
    <Layout>
      <div className='mt-32 grid sm:grid-cols-2'>
        <div className='text-center'>
          <MovieTop
            image='https://upload.wikimedia.org/wikipedia/id/f/f9/TheAvengers2012Poster.jpg'
            title='Avenger'
          />
          <button
            className='mt-4 bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Buy Ticket
          </button>
        </div>
        <div className='ml-4'>
          <h2 className='text-center text-gray-600 uppercase text-lg font-bold tracking-wider'>
            Choose Seat
          </h2>
          <div className='text-center mt-10'>{seats?.map((o) => o)}</div>
        </div>
      </div>
    </Layout>
  );
}
