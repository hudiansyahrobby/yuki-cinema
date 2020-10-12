import React from 'react';

import AddIcon from '@material-ui/icons/Add';

export default function Accordion() {
  return (
    <div className='w-11/12 md:w-3/4 mx-auto'>
      <div className='mt-4 flex justify-between  items-center bg-info py-4 px-8 mx-auto'>
        <h2 className='text-white tracking-widest'>Lorem Ipsum</h2>
        <AddIcon style={{ fontSize: 40 }} className='text-white cursor-pointer' />
      </div>
      <div>
        <p className='text-white p-8 leading-7 hidden'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt eius error
          consectetur! Sit quas nesciunt tempore consectetur quos totam mollitia, eveniet tenetur,
          ab quis sint eligendi omnis voluptatem dolorum veniam quibusdam animi sunt maxime rerum.
          Illo omnis autem fuga perspiciatis neque ut voluptatem? Similique nam maxime porro
          laudantium ea.
        </p>
      </div>
    </div>
  );
}
