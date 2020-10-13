import React from 'react';
import Container from '../components/Container';
import Filter from '../components/Filter';
import Layout from '../components/Layout';
import Movies from '../components/Movies/Movies';
import Search from '../components/Search';

export default function MoviePage() {
  return (
    <Layout>
      <div className='mt-24'></div>
      <Container>
        <h1 className='text-4xl font-bold text-primary text-center tracking-wide'>Our Movies</h1>
        <Search />

        <div className='mt-8 flex justify-center'>
          <Filter />
          <Movies />
        </div>
      </Container>
    </Layout>
  );
}
