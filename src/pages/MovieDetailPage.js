import React from 'react';
import Container from '../components/Container';
import MovieTop from '../components/MovieTop';
import Pills from '../components/Pill/Pills';
import Producer from '../components/Producer';
import Stars from '../components/Stars';
import Video from '../components/Video';
import Crew from '../components/Crew';
import Layout from '../components/Layout';

export default function MovieDetailPage() {
  return (
    <Layout>
      <div className='mt-24'>
        <Container>
          <MovieTop />
          <Stars />

          <Producer />
          <div className='text-center mt-4'>
            <button className='bg-gray-800 rounded-lg px-3 py-2 text-white uppercase font-extrabold tracking-wide'>
              Buy Ticket
            </button>
          </div>
          <Pills />

          <Video />
          <Crew />
        </Container>
      </div>
    </Layout>
  );
}
