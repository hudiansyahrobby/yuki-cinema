import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router';
import { getScheduleById } from '../actions/scheduleAction';
import { addTicket, getPayment } from '../actions/ticketAction';
import Layout from '../components/Layout';
import MovieTop from '../components/MovieTop';
import Spinner from '../components/Spinner/Spinner';

export default function BuyTicketPage() {
  const { authenticated } = useSelector((state) => state.user);
  const { scheduleById, loading } = useSelector((state) => state.schedule);
  const { token } = useSelector((state) => state.ticket);
  const [bookedSeat, setBookedSeat] = useState('');
  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    dispatch(getScheduleById(id));
    dispatch(getPayment());
  }, [dispatch, id]);

  const onBuyTicketHandler = () => {
    if (!bookedSeat) alert('Mohon Pilih Kursi');

    return window.snap.pay(token, {
      onSuccess: ({ transaction_id }) => {
        const tickedData = {
          movie: scheduleById.movie.title,
          seatNumber: bookedSeat,
          schedule: scheduleById.date,
          transaction_id,
        };
        dispatch(addTicket(tickedData, history));
      },
      onError: () => {
        return alert('Mohon Maaf Terjadi Error');
      },
    });
  };

  if (!authenticated) {
    return <Redirect to='/masuk' />;
  }

  const seats = scheduleById?.seat?.map(({ _id, number, booked }, index) => {
    console.log(`${number} - ${booked}`);
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
                ? bookedSeat === number
                  ? 'bg-white'
                  : 'bg-secondary text-gray-100 hover:bg-indigo-700'
                : 'bg-primary text-gray-100 hover:bg-red-700'
            } `}
            disabled={booked}
            onClick={() => setBookedSeat(number)}
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
                bookedSeat === number
                ? 'bg-white'
                : 'bg-secondary text-gray-100 hover:bg-indigo-700'
              : 'bg-primary text-gray-100 hover:bg-red-700'
          } `}
          onClick={() => setBookedSeat(number)}
          disabled={booked}
          key={_id}
        >
          {number}
        </button>
      );
    }
  });

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className='mt-32 grid sm:grid-cols-2'>
          <div className='text-center'>
            <MovieTop
              image={`https://image.tmdb.org/t/p/w500/${scheduleById?.movie?.image}`}
              title={scheduleById?.movie?.title}
            />
            <h2 className='mt-4 uppercase font-bold text-xl tracking-wider text-center text-gray-600'>
              {scheduleById?.movie?.title}
            </h2>
            <h2 className='mt-4 font-semibold text-sm tracking-wider text-center text-gray-600'>
              Harga : Rp 40.000
            </h2>
            <button
              className='mt-4 bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
              onClick={onBuyTicketHandler}
            >
              Beli Tiket
            </button>
          </div>
          <div className='mt-4 sm:mt-0 ml-4'>
            <h2 className='text-center text-gray-600 uppercase text-lg font-bold tracking-wider'>
              Pilih Kursi
            </h2>
            <div className='text-center mt-4'>{seats?.map((seat) => seat)}</div>
          </div>
        </div>
      )}
    </Layout>
  );
}
