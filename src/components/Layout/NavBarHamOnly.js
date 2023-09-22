import React, { useState, useEffect } from 'react';

const NavBarHamOnly = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 1) {
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
    setIsMobileMenuOpen(window.innerWidth <= 8000);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Set the mobile menu state to false when the component mounts
  }, []);

  return (
    <nav
      className={`absolute z-50  w-[100vw] flex flex-col items-start justify-start cowboy uppercase text-3xl text-white ${
        isMobileMenuOpen ? 'w-[100vw] h-[100vh] start-screen-background' : ''
      }`}>
      <button
        className='absolute top-2 left-2 focus:outline-none'
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
        } w-[100vw]  justify-between mt-2 `}>
        <div className='flex flex-col  items-center space-y-8  mb-8  text-3xl'>
          <img
            src='/TarantulaMediaLogo_Transparent.png'
            className='w-[3.5rem] h-[3.5rem]  bg-black border-white border-1 rounded-lg nav-logo-shadow'
          />

          <a
            target='_blank'
            href='https://wildwestundead.io/'
            className='block text-white mb-4'>
            About
          </a>

          <a
            target='_blank'
            href='https://wildwestundead.io/privacy-policy'
            className='block text-white mb-4'>
            Privacy
          </a>
          <a
            target='_blank'
            href='https://wildwestundead.io/support'
            className='block text-white mb-4'>
            Contact
          </a>
        </div>

        <div className='flex flex-col  items-center text-white mt-6 space-y-8  text-3xl'>
          <a
            target='_blank'
            href='https://wildwestundead.myshopify.com'
            className='block   text-white '>
            Merch Shop
          </a>
          <a
            target='_blank'
            href='https://app.manifold.xyz/c/wildwestundead'
            className='block   text-white '>
            Buy Undead Pass
          </a>
          <a
            target='_blank'
            href='https://www.instagram.com/wildwestundead/'
            className='block   text-white bg-white border-white border-1 rounded-lg'>
            <img className='p-2' src='icons8-instagram-32.png' alt='instgram' />
          </a>
          <a
            target='_blank'
            href='https://twitter.com/wildwestundead'
            className='block   text-white bg-white border-white border-1 rounded-lg'>
            <img className='p-2' src='icons8-twitter-32.png' alt='Twitter' />
          </a>
          <a
            target='_blank'
            href='https://www.tiktok.com/@wildwestundead_'
            className='block  text-white bg-white border-white border-1 rounded-lg'>
            <img className='p-2' src='icons8-tiktok-32.png' alt='tiktok' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBarHamOnly;
