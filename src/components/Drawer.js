import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { signout } from '../actions/userAction';

export default function Drawer({ open }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignoutHandler = () => {
    dispatch(signout());
    history.push('/signin');
  };

  return (
    <div
      className={`fixed top-0 z-20 left-0 h-full w-1/2 bg-info transform transition-all duration-300 ease-in-out ${
        !open ? '-translate-x-full' : 'translate-x-0'
      }`}
    >
      <NavLink
        to='/'
        exact
        activeClassName='bg-gray-800'
        className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
      >
        Home
      </NavLink>
      <NavLink
        to='/movies'
        activeClassName='bg-gray-800'
        className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
      >
        Movies
      </NavLink>
      <NavLink
        to='/schedule'
        activeClassName='bg-gray-800'
        className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
      >
        Schedule
      </NavLink>

      {user?.role === 'user' || user?.role === 'admin' ? (
        <>
          <NavLink
            to='/watchlist'
            activeClassName='bg-gray-800'
            className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
          >
            Watchlist
          </NavLink>

          <NavLink
            to='/signout'
            className='mt-4 btn btn-primary hover:bg-red-900 transition-colors duration-300 block text-white text-center mx-6'
            onClick={onSignoutHandler}
          >
            Signout
          </NavLink>
        </>
      ) : (
        <NavLink
          to='/signin'
          className='btn btn-primary hover:bg-red-900 transition-colors duration-300 block text-white text-center mx-6'
        >
          Signin
        </NavLink>
      )}
    </div>
  );
}
