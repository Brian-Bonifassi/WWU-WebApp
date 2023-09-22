import React, { useState, useRef, useEffect } from 'react';

const AniDivForMint = ({ onClose }) => {
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
        <h1 className=' mt-10 text-5xl cowboy text-center'>
          EMBRACE THE CURSE
        </h1>

        <div
          className={`line-animation ${
            isExiting ? 'exitAnimation' : ''
          } mb-4`}></div>
        <div className='w-[98w] lg:w-[50vw] overflow-auto hide-scrollbar p-2'>
          <p className='text-2xl my-3 text-center '>
            Welcome to the frontier, partner. Grab hold of your Undead Pass,
            your ticket to the deeper, grittier, and more immersive world of
            Wild West Undead. As a startup, we've designed the Undead Pass to
            give you, our dedicated early community members, an exclusive stake
            in the Undying Outlaw journey.
            <br />
            <br /> Undead Pass holders not only get a front-row seat to the
            eerie mysteries of our game but also earn the opportunity to compete
            in heart-pounding events for real monetary prizes. Imagine the
            thrill of surviving waves of zombies, all while vying for a top spot
            and a shot at the prize pool!
            <br />
            <br /> But the Undead Pass isn’t just about competitive events. It's
            also your key to our community. Connect with other fans, discuss
            strategies, share epic tales, and experience the camaraderie of
            fellow Undying Outlaws. And as we grow, you'll be the first to hear
            about and experience new content and features.
            <br />
            <br /> At Wild West Undead, we believe in creating a game world
            that's not just fun to play but one that builds a community of
            dedicated fans. The Undead Pass is your invitation to be part of our
            journey, from our humble startup beginnings to the heights we aim to
            achieve. Ready to saddle up and ride with us into the Undead
            frontier?
          </p>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center'>
          <a target='_blank' href='https://app.manifold.xyz/c/wildwestundead'>
            <h3 className='p-5  cowboy text-center text-3xl lg:text-5xl mb-2 font-bold border-2 border-white border-solid'>
              GET THE UNDEAD PASS
            </h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default AniDivForMint;
