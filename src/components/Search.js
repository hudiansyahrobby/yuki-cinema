import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

export default function search() {
  return (
    <div className='mt-4 flex justify-center'>
      <div className='bg-info py-2 px-3 flex justify-between items-center w-full'>
        <input
          type='text'
          className='bg-transparent focus:outline-none text-white tracking-wider w-full'
        />
        <SearchIcon className='text-white' />
      </div>
    </div>
  );
}
