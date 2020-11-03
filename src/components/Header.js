import AcUnitIcon from '@material-ui/icons/AcUnit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { signout } from '../actions/userAction';
import Drawer from './Drawer';

export default function Header({ onOpen }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignoutHandler = () => {
    dispatch(signout());
    history.push('/signin');
  };
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

        <div className='md:hidden' onClick={onOpen}>
          <MenuIcon
            className='text-white hover:text-gray-400 cursor-pointer transition duration-300'
            fontSize='large'
          />
        </div>

        <ul className='hidden lg:flex text-white  justify-between items-center space-x-4'>
          <NavLink to='/' className='no-underline'>
            Home
          </NavLink>
          <NavLink to='/movies' className='no-underline'>
            Movies
          </NavLink>
          <NavLink to='/schedule' className='no-underline'>
            Schedule
          </NavLink>
          {user?.role === 'user' || user?.role === 'admin' ? (
            <>
              <div className='relative p-1'>
                <FavoriteIcon className='text-primary cursor-pointer hover:text-red-900 transition-colors duration-300' />
                <p
                  style={{ right: '-5px' }}
                  className='absolute top-0 h-4 w-4 text-xs rounded-full bg-red-600 inline-flex justify-center items-center'
                >
                  1
                </p>
              </div>

              <NavLink
                to='/signout'
                className='btn btn-primary hover:bg-red-900 transition-colors duration-300'
                onClick={onSignoutHandler}
              >
                Signout
              </NavLink>
            </>
          ) : (
            <NavLink
              to='/signin'
              className='btn btn-primary hover:bg-red-900 transition-colors duration-300'
            >
              Signin
            </NavLink>
          )}
        </ul>
      </ul>
      <Drawer />
    </nav>
  );
}
