import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTicket } from '../actions/ticketAction';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Tickets from '../components/Tickets/Tickets';

export default function ProfilePage() {
  const { user } = useSelector((state) => state.user);
  const { ticket } = useSelector((state) => state.ticket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);

  return (
    <Layout>
      <Container>
        <h1 className='mt-32 text-center font-extrabold tracking-wider uppercase text-xl text-gray-600'>
          My Profile
        </h1>
        <div className='mt-5'>
          <div className='w-40 h-40 mx-auto'>
            <img
              src={user.profilPic}
              alt={user.name}
              className='block w-full h-full rounded-full '
            />
          </div>
          <div>
            <h2 className='mt-8 text-center font-bold tracking-wider capitalize text-lg text-gray-600'>
              {user.name}
            </h2>

            <div>
              <h2 className='mt-8 font-semibold tracking-wider text-gray-600'>My Ticket</h2>
              <Tickets data={ticket} />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
