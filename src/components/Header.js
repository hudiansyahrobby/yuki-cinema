import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { href: '/', label: 'Home' },
  { href: '/show', label: 'Show' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/signin', label: 'Signin', button: true },
];

export default function Header() {
  return (
    <nav className='bg-info fixed top-0 w-full'>
      <ul className='flex justify-between items-center p-6'>
        <li>
          <Link
            to='/'
            className='text-white no-underline uppercase text-xl font-bold tracking-wider'
          >
            <AcUnitIcon className='text-primary mr-2' />
            Yuki <span className='text-primary'>Cinema</span>
          </Link>
        </li>

        {/* Menu Icon */}
        <svg
          className='w-8 h-8 text-white lg:hidden'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>

        <ul className='hidden lg:flex text-white  justify-between items-center space-x-4'>
          {links.map(({ href, label, button }) => (
            <li key={`${href}${label}`}>
              {button ? (
                <NavLink
                  to={href}
                  className='btn btn-primary hover:bg-red-900 transition-colors duration-300'
                >
                  {label}
                </NavLink>
              ) : (
                <NavLink to={href} className='no-underline'>
                  {label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
