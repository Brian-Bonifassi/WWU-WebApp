import React, { useState, useRef, useEffect } from 'react';

const AniDiv = ({ onClose, title, videoPath }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const aniDivRef = useRef(null);

  const boxShadowStyle = {
    boxShadow: isMobile ? 'none' : '0px 0px 30px 10px rgba(115,5,5,0.75)',
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const containerDiv = aniDivRef.current;

      if (containerDiv && !containerDiv.contains(event.target)) {
        setIsExiting(true); // Trigger the exit animation
        setTimeout(() => {
          onClose(); // Close the AniDiv component after the exit animation
        }, 800);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

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

  // if (isMobile) {
  //   return (
  //     <>
  //       <div
  //         className={`${
  //           isExiting ? 'exitAnimation' : 'entranceAnimation'
  //         } absolute z-10 w-full h-[1/4] top-[9%] flex flex-col justify-around items-center font-serif text-white`}
  //         ref={aniDivRef}>
  //         <div className='p-1 flex flex-col justify-center items-center text-center'>
  //
  //           <div className='line-animation mb-4'></div>
  //
  //         </div>
  //       </div>

  //       <button
  //         style={boxShadowStyle}
  //         className={`${
  //           isExiting ? 'exitAnimation' : 'entranceAnimation'
  //         } absolute z-10 top-[10px] right-[10px] cursor-pointer border-solid border-2 border-white rounded-md p-1`}
  //         onClick={handleExitClick}>
  //         <svg
  //           xmlns='http://www.w3.org/2000/svg'
  //           width='16'
  //           height='16'
  //           viewBox='0 0 16 16'
  //           className={isExiting ? 'exitButtonAnimation' : ''}>
  //           <path
  //             fill='#ffffff'
  //             d='M15.354 13.646L10 8.293l5.354-5.353a.5.5 0 1 0-.708-.708L9.293 7.586 3.94 2.233a.5.5 0 0 0-.708.708L8.586 8l-5.354 5.354a.5.5 0 0 0 .708.708L8 8.707l5.354 5.354a.5.5 0 0 0 .708-.708z'
  //           />
  //         </svg>
  //       </button>

  //       <video
  //         className={`${
  //           isExiting ? 'exitAnimation' : 'entranceAnimation'
  //         } absolute top-0 max-w-full w-full h-[100vh] border-solid border-2 border-stone-600 rounded`}
  //         src={videoPath}
  //         alt=''
  //         autoPlay
  //         controls
  //       />
  //     </>
  //   );
  // }

  return (
    <div
      className={`${
        isExiting ? 'exitAnimation' : 'entranceAnimation'
      } absolute top-0 z-10 w-full h-full bg-amber-950 bg-opacity-90 flex flex-col justify-center items-center font-serif text-white`}
      ref={aniDivRef}>
      <h1 className='text-4xl lg:text-5xl cowboy mt-10 mb-3 text-center'>
        {title}
      </h1>
      <div
        className={`line-animation ${
          isExiting ? 'exitAnimation' : ''
        } mb-4`}></div>

      <video
        className={`${
          isExiting ? 'exitAnimation' : 'entranceButtonAnimation'
        } w-3/4 h-3/4 ${isExiting ? 'exitButtonAnimation' : ''}`}
        src={videoPath}
        alt=''
        autoPlay
        controls
      />

      {!isMobile && (
        <div className='absolute top-[20%] right-[8%] w-[50vw] flex flex-col justify-center items-center text-center'></div>
      )}

      <button
        style={boxShadowStyle}
        className={`${
          isExiting ? 'exitAnimation' : 'entranceAnimation'
        } absolute z-10 top-[10px] right-[10px] cursor-pointer border-solid border-2 border-white rounded-md p-1`}
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
    </div>
  );
};

export const AniDivScene1 = ({ setShowAniDiv }) => {
  return (
    <AniDiv
      title='WATCH THE CINEMATIC SHOWDOWN'
      videoPath='/SCRIPT_1.mp4'
      onClose={() => setShowAniDiv(false)}
    />
  );
};

export default AniDiv;
