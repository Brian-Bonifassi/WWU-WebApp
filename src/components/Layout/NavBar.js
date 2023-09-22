import React, { useState, useEffect } from 'react';
import { Linked } from '../../views';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Game from '../blackjack/game';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 1020) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(window.innerWidth <= 1020);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Set the mobile menu state to false when the component mounts
  }, []);

  return (
    <nav
      className={`absolute z-50 w-[100vw] flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between cowboy uppercase text-3xl text-white ${
        isMobileMenuOpen ? 'w-[100vw] h-[100vh] start-screen-background' : ''
      }`}>
      <button
        className='absolute top-2 left-2 lg:hidden focus:outline-none'
        onClick={handleToggleMenu}>
        <svg
          className='h-10 w-10 fill-current border-white border-2 rounded-lg'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          {isMobileMenuOpen ? (
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 011.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z'
            />
          ) : (
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z'
            />
          )}
        </svg>
      </button>

      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } w-[100vw] lg:flex justify-between mt-2 lg:ml-5`}>
        <div className='flex flex-col lg:flex-row items-center space-y-8 lg:space-x-6 mb-8 lg:mb-0 text-3xl'>
          <img
            src='/TarantulaMediaLogo_Transparent.png'
            className='w-[3.5rem] h-[3.5rem] lg:mt-6 bg-black border-white border-1 rounded-lg nav-logo-shadow'
          />

          <a
            target='_blank'
            href='https://wildwestundead.io/'
            className='block lg:inline-block lg:mx-2 text-white mb-4'>
            About
          </a>

          <a
            target='_blank'
            href='https://wildwestundead.io/privacy-policy'
            className='block lg:inline-block lg:mx-2 text-white mb-4'>
            Privacy
          </a>
          <a
            target='_blank'
            href='https://wildwestundead.io/support'
            className='block lg:inline-block lg:mx-2 text-white mb-4'>
            Contact
          </a>
        </div>

        <div className='flex flex-col lg:flex-row items-center text-white mt-6 space-y-8 lg:space-y-0 lg:space-x-6 lg:mr-5 text-3xl'>
          <a
            target='_blank'
            href='https://wildwestundead.myshopify.com'
            className='block lg:inline-block  text-white '>
            Merch Shop
          </a>
          <a
            target='_blank'
            href='https://app.manifold.xyz/c/wildwestundead'
            className='block lg:inline-block  text-white '>
            Buy Undead Pass
          </a>
          <a
            target='_blank'
            href='https://www.instagram.com/wildwestundead/'
            className='block lg:inline-block  text-white bg-white border-white border-1 rounded-lg'>
            <img className='p-2' src='icons8-instagram-32.png' alt='instgram' />
          </a>
          <a
            target='_blank'
            href='https://twitter.com/wildwestundead'
            className='block lg:inline-block  text-white bg-white border-white border-1 rounded-lg'>
            <img className='p-2' src='icons8-twitter-32.png' alt='Twitter' />
          </a>
          <a
            target='_blank'
            href='https://www.tiktok.com/@wildwestundead_'
            className='block lg:inline-block  text-white bg-white border-white border-1 rounded-lg'>
            <img className='p-2' src='icons8-tiktok-32.png' alt='tiktok' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
