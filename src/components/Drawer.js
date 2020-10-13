import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Drawer({ open }) {
  return (
    <div
      className={`fixed top-0 z-20 left-0 h-full w-1/2 bg-info transform transition-all duration-300 ease-in-out ${
        !open ? '-translate-x-full' : 'translate-x-0'
      }`}
    >
      <NavLink
        to='/'
        className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
      >
        Home
      </NavLink>
      <NavLink
        to='/show'
        className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
      >
        Show
      </NavLink>
      <NavLink
        to='/schedule'
        className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
      >
        Schedule
      </NavLink>
    </div>
  );
}
