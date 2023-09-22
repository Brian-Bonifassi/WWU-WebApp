import React, { useState, useRef, useEffect } from 'react';

const AniDivForBlackjack = ({ onClose }) => {
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
        <h1 className=' text-5xl cowboy text-center mt-[3.5rem]'>
          JOIN THE UNDYING OUTLAWS
        </h1>

        <div
          className={`line-animation ${
            isExiting ? 'exitAnimation' : ''
          } mb-4`}></div>
        <div className='w-[98w] lg:w-[50vw] overflow-auto hide-scrollbar p-2'>
          <p className='text-2xl my-3 text-center '>
            Join our posse, partner! Saddle up and stay connected with the
            Undying Outlaws community through our social media platforms. This
            is your direct trail to all the latest news, updates, and exclusive
            content about Wild West Undead. Take a peek behind the scenes, join
            lively discussions, participate in community contests, and connect
            with fellow fans who share your passion for the Wild West and its
            undead challenges. You'll also have the chance to provide direct
            feedback and influence the future of our game. From the thrilling
            battles on our TikTok, the lore unfolding on Twitter, to the
            camaraderie on Discord, there's a place for every Outlaw. So, don't
            wait, partner - follow our social media trails today and immerse
            yourself in the Wild West Undead experience.
          </p>
          <div className='  flex flex-row justify-center items-center text-white mt-5 space-x-6  text-3xl'>
            <a
              target='_blank'
              href='https://www.instagram.com/wildwestundead/'
              className='block lg:inline-block  text-white bg-white border-white border-1 rounded-lg'>
              <img
                className='p-2'
                src='icons8-instagram-32.png'
                alt='instgram'
              />
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
      </div>
    </>
  );
};

export default AniDivForBlackjack;
