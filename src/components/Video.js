/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

export default function Video() {
  return (
    <div className='mt-8'>
      <h2 className='text-center text-gray-600 text-2xl font-bold tracking-wide uppercase'>
        Movie Trailer
      </h2>

      <iframe
        className='w-full md:w-1/2 md:mx-auto lg:w-5/12'
        height='320'
        src='https://www.youtube.com/embed/6ZfuNTqbHE8'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
}
