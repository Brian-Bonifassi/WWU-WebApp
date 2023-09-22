import React, { useState, useRef, useEffect } from 'react';

const AniDivForTeam = ({ onClose }) => {
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
    <div
      className={`${
        isExiting ? 'exitAnimation' : 'entranceAnimation'
      } absolute top-0 z-10 w-full h-full bg-amber-950 bg-opacity-90 flex flex-col justify-center items-center font-serif text-white`}
      ref={aniDivRef}>
      <h1 className='text-4xl lg:text-5xl mt-[3.5rem] cowboy text-center'>
        THE WILD WEST UNDEAD TEAM
      </h1>
      <h2 className='text-3xl lg:text-4xl my-3 text-center'>
        Meet the Team Behind the Mahyem
      </h2>
      <div
        className={`line-animation ${
          isExiting ? 'exitAnimation' : ''
        } mb-4`}></div>

      <div className='w-[98w] lg:w-[40vw] overflow-auto hide-scrollbar p-2'>
        <h3 className='text-center text-xl mb-5 font-bold'>
          Welcome to the world of Wild West Undead, crafted by a talented team
          of creators, developers, and designers. Here's more about the
          brilliant minds behind your favorite gaming experience.
        </h3>
        <h3 className='text-center text-2xl mb-2 font-bold'>
          Brian Bonifassi - Creator/Creative Director
        </h3>
        <p className='leading-7 my-5 text-lg'>
          The visionary behind Wild West Undead, Brian Bonifassi, combines his
          creativity with a deep passion for the gaming industry. As the
          Creative Director, Brian is the driving force behind the game's unique
          concept and immersive storytelling.
        </p>
        <h3 className='text-center text-2xl mb-2 font-bold'>
          Justin Baker - Unreal Engine Lead Developer
        </h3>
        <p className='leading-7 my-5 text-lg'>
          As the Unreal Engine Lead Developer, Justin Baker brings to life the
          captivating world of Wild West Undead. With his extensive experience
          in Unreal Engine, Justin seamlessly weaves in intricate gameplay
          mechanics and stunning visual effects.
        </p>
        <h3 className='text-center text-2xl mb-2 font-bold'>
          Juan Lezama - Lead Level Designer
        </h3>
        <p className='leading-7 my-5 text-lg'>
          Juan Lezama, our Lead Level Designer, crafts the breathtaking
          environments and challenging levels of Wild West Undead. With a knack
          for detail and a deep understanding of player engagement, Juan sets
          the stage for thrilling adventures in the Wild West.
        </p>
        <h3 className='text-center text-2xl mb-2 font-bold'>
          Jim Pei Yifei - Roguish Scholar Studio - Lead Animator
        </h3>
        <p className='leading-7 my-5 text-lg'>
          In collaboration with Roguish Scholar Studio, Jim Pei Yifei, as the
          Lead Animator, breathes life into the characters of Wild West Undead.
          With a blend of creativity and technical expertise, Jim creates
          dynamic animations that enhance the player's immersion.
        </p>
        <h3 className='text-center text-2xl mb-2 font-bold'>
          Erik Truckner - Lead Web App Developer
        </h3>
        <p className='leading-7 my-5 text-lg'>
          Erik Truckner is the wizard behind our interactive web app. As the
          Lead Web App Developer, Erik's innovative use of technologies like
          Three.js, React, and Blender has resulted in a user experience that is
          as engaging as it is informative.
        </p>
      </div>

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

export default AniDivForTeam;
