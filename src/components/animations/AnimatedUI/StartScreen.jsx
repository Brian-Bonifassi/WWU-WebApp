import { useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';

import TargetModel from './TargetModel';

// import logo from '/assets/logo.png'

const StartScreen = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showScrollSection, setShowScrollSection] = useState(false);
  const [addFadeWelcome, setAddFadeWelcome] = useState(false);
  const [addFadeScrollSection, setAddFadeScrollSection] = useState(false);
  const [addFadeTarget, setAddFadeTarget] = useState(false);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setShowScrollSection(true);
    }, 6000);

    const welcomeFadeTimer = setTimeout(() => {
      setAddFadeWelcome(true);
    }, 4900);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(welcomeFadeTimer);
    };
  }, []);

  useEffect(() => {
    let scrollSectionTimer;
    let scrollSectionFadeTimer;

    if (showScrollSection) {
      scrollSectionTimer = setTimeout(() => {
        setShowScrollSection(false);
      }, 6000);

      scrollSectionFadeTimer = setTimeout(() => {
        setAddFadeScrollSection(true);
      }, 4900);
    }

    return () => {
      clearTimeout(scrollSectionTimer);
      clearTimeout(scrollSectionFadeTimer);
    };
  }, [showScrollSection]);

  const handleCloseStartScreen = () => {
    setAddFadeTarget(true); // Add fade immediately

    setTimeout(() => {
      setShowStartScreen(false); // Delayed execution after 1.2 seconds
    }, 1400); // 1.2 seconds
  };

  const [isMobile, setIsMobile] = useState(false);

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
      {showStartScreen && (
        <div
          className={`${
            addFadeTarget ? 'fade-out' : ''
          }    w-[100vw] h-[100vh] absolute z-50 start-screen-background flex flex-col justify-center items-center `}>
          {showWelcome && (
            <div
              className={`${
                addFadeWelcome ? ' fade-out' : ''
              } flex flex-col justify-center items-center`}>
              <div className='text-white cowboy text-5xl'>WELCOME TO</div>
              <img className='lg:w-[35vw]' src='/wwulogo.png' />
            </div>
          )}
          {showScrollSection && (
            <div
              className={`${
                addFadeScrollSection ? 'fade-out' : 'fade-in '
              } flex flex-col justify-center items-center text-center `}>
              <div className='w-[98vw] text-white cowboy text-4xl'>
                SCROLL DOWN TO NAVIGATE THROUGH LOS DIABLOS
              </div>
              <div className='slide-bottom'>
                <div className='down-arrow'></div>
                <div className='down-arrow'></div>
                <div className='down-arrow'></div>
              </div>
            </div>
          )}
          {!showScrollSection && !showWelcome && (
            <div className=' w-[98vw] h-[50vh] lg:h-[60vh] fade-in flex flex-col justify-center items-center'>
              <div className=' text-white cowboy text-6xl lg:text-9xl mb-11'>
                TAP TO ENTER
              </div>
              <Canvas
                style={{
                  position: 'relative',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#00000000',
                }}>
                <ambientLight />
                <TargetModel
                  onClick={handleCloseStartScreen}
                  position={[0, 0, 0]}
                  rotation={[0.15, 1.95, 0]}
                  scale={62}
                />
              </Canvas>
              <div className=' text-white mt-5  text-1xl mb-11 w-[100vw] text-center'>
                Click other hotspots through the town
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default StartScreen;
