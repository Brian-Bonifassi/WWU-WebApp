import React, { useState, useRef, useEffect } from 'react';

const AniDivForEpicGames = ({ onClose }) => {
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
        <h1 className=' mt-[3.5rem] text-5xl cowboy text-center'>
          JOIN THE UNDEAD OUTLAWS
        </h1>
        <div
          className={`line-animation ${
            isExiting ? 'exitAnimation' : ''
          } mb-4`}></div>
        <div className='w-[98w] lg:w-[50vw] overflow-auto hide-scrollbar p-2'>
          <p className='text-2xl my-3 text-center '>
            Get ready, partners! The full version of Wild West Undead is
            galloping its way to you soon, but you don't have to wait to
            experience the thrilling battles and unending adventures in our
            cursed town. We've prepared a tantalizing sneak peek of what's to
            come. Our game demo is now available for download on the Epic Games
            Store. Step into the boots of an Undying Outlaw and embark on a
            chilling journey in the Wild West like no other. Wield cursed
            weapons, uncover dark secrets, and fight off relentless undead
            enemies. Remember, every demo download brings us one step closer to
            the full launch. So, head to the Epic Games Store, download the demo
            today and brace yourself for a wild ride in the world of Wild West
            Undead! WishList it Now!
          </p>
        </div>

        <div className='w-[100%] flex flex-col justify-center items-center'>
          <a
            target='_blank'
            href='https://store.epicgames.com/en-US/p/wildwestundead-wild-west-undead-demo-0f2346'>
            <h3 className='p-5  cowboy text-center text-3xl lg:text-5xl mb-2 font-bold border-2 border-white border-solid'>
              EPIC GAMES LINK
            </h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default AniDivForEpicGames;
