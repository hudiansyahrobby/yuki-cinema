import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Cards from '../components/Cards/Cards';
import Accordion from '../components/Accordion';
import Banner from '../components/Banner';
import Feature from '../components/Feature';

export default function HomePage() {
  return (
    <div className='font-poppins'>
      <Hero />

      <Container>
        <Cards />
        <Banner />
        <Feature direction='right' />
        <Feature direction='left' />

        <div className='mt-20'>
          <h2 className='text-center text-3xl uppercase tracking-wide text-white font-bold mb-10 mx-4'>
            Frequently Asked Question
          </h2>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </Container>
    </div>
  );
}
