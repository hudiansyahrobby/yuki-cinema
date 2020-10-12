import React from 'react';

import Pill from './Pill';

const categories = ['Comedy', 'Adventure', 'Action'];

export default function Pills() {
  return (
    <div className='mt-10 text-center'>
      {categories.map((category) => {
        return <Pill category={category} />;
      })}
    </div>
  );
}
