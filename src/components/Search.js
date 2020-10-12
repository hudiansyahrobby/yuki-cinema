import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function search() {
  return (
    <div className='mt-4 flex justify-center'>
      <div className='bg-info py-2 px-3 flex justify-between items-center mr-2 w-full'>
        <input
          type='text'
          className='bg-transparent focus:outline-none text-white tracking-wider w-full'
        />
        <SearchIcon className='text-white' />
      </div>
      <div className='md:hidden'>
        <FilterListIcon style={{ fontSize: 40 }} className='p-1 text-white bg-info rounded-sm' />
      </div>
    </div>
  );
}
