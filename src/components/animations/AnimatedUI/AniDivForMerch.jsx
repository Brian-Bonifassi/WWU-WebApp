import React, { useState, useRef, useEffect } from 'react';

const AniDivForMerch = ({ onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const aniDivRef = useRef(null);

  const boxShadowStyle = {
    boxShadow: '0px 0px 30px 10px rgba(115,5,5,0.75)',
  };

  const handleExitClick = () => {
    setIsExiting(true); // Trigger the exit animation
    setTimeout(() => {
      onClose(); // Close the AniDiv component after the exit animation
    }, 800);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1021); // Set isMobile based on the screen width
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      <button
        style={boxShadowStyle}
        className={`${
          isExiting ? 'exitAnimation' : 'entranceAnimation'
        } absolute z-20 top-3 right-3 cursor-pointer border-solid border-2 border-white rounded-md p-1`}
        onClick={handleExitClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          className={isExiting ? 'exitButtonAnimation' : ''}>
          <path
            fill='#ffffff'
            d='M15.354 13.646L10 8.293l5.354-5.353a.5.5 0 1 0-.708-.708L9.293 7.586 3.94 2.233a.5.5 0 0 0-.708.708L8.586 8l-5.354 5.354a.5.5 0 0 0 .708.708L8 8.707l5.354 5.354a.5.5 0 0 0 .708-.708z'
          />
        </svg>
      </button>
      <div
        className={`${
          isExiting ? 'exitAnimation' : 'entranceAnimation'
        } absolute top-0 z-10 w-full h-full bg-amber-950 bg-opacity-90 flex flex-col justify-center items-center font-serif text-white space-y-10 `}
        ref={aniDivRef}>
        <h1 className='text-5xl mt-10 cowboy text-center'>
          WICKED MERCHANDISE
        </h1>
        <h2 className='w-[96%] text-2xl lg:text-3xl my-1 lg:my-3 text-center'>
          Discover dark-themed apparel, accessories, and eerie collectibles
        </h2>
        <div
          className={`line-animation ${
            isExiting ? 'exitAnimation' : ''
          } my-1 lg:my-3`}></div>
        <div className='w-[98w] lg:w-[50vw] overflow-auto hide-scrollbar p-2'>
          <p className=' text-xl lg:text-2xl my-1 lg:my-3 text-center '>
            Venture if you dare into the Cursed Outpost: Your one-stop shop for
            all things Wild West Undead. Hosted on Shopify, our store is an
            eerie alcove filled with exclusive, bone-chilling merchandise that
            pay homage to our nightmarish wild west universe. Our cryptic
            collection boasts of apparel, accessories, and collectibles, each
            echoing haunting tales of our cursed characters and their relentless
            battles. Dare to support our development team? Embrace the horror,
            exhibit your taste for the macabre, and bring home a piece of the
            Undead frontier from our store. Tread lightly, and remember, the
            Outpost is not for the faint of heart!
          </p>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center'>
          <a target='_blank' href='https://wildwestundead.myshopify.com'>
            <h3 className='p-5  cowboy text-center text-3xl lg:text-5xl mb-2 font-bold border-2 border-white border-solid'>
              MERCH STORE
            </h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default AniDivForMerch;
