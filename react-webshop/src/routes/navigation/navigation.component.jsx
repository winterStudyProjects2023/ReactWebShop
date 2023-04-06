import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as BeRealLogo } from '../../assets/be-real-perfect-svg_757064-35.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import './navigation.style.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';

export default function Navigation() {
  const { currentUser } = useContext(UserContext);

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
          { currentUser ? <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> :
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          }
        </div>
      </div>
      <Outlet />
    </>
  );
}
