import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as BeRealLogo } from '../../assets/be-real-perfect-svg_757064-35.svg';
import './navigation.style.scss';

export default function Navigation() {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <BeRealLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/signIn'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
