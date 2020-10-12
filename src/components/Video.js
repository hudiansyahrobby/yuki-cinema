/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

export default function Video() {
  return (
    <div className='mt-4'>
      <iframe
        className='w-full md:w-1/2 lg:w-5/12'
        height='320'
        src='https://www.youtube.com/embed/6ZfuNTqbHE8'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
}
