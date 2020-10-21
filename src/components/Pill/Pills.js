import React from 'react';

import Pill from './Pill';

const categories = ['Comedy', 'Adventure', 'Action'];

export default function Pills() {
  return (
    <div className='mt-8 text-center sm:text-left sm:mt-4'>
      {categories.map((category) => {
        return <Pill category={category} key={category} />;
      })}
    </div>
  );
}
