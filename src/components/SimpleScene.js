import React, {
  useState,
  useEffect,
  Suspense,
  useRef,
  useMemo,
  useCallback,
  useTransition,
} from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import {
  OrbitControls,
  ScrollControls,
  Sky,
  Stars,
  useScroll,
  Gltf,
  useGLTF,
  useProgress,
  Environment,
  Text,
  MeshDistortMaterial,
} from '@react-three/drei';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import WildWestTown from './animations/Environment/WildWestTown';
import { useDispatch } from 'react-redux';
import { setLoading, setProgress } from '../services/three';
import { setAppear } from '../services/modeling';
import * as THREE from 'three';
import { getProject, val, sequence } from '@theatre/core';

import {
  editable as e,
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from '@theatre/r3f';

import { AniDivScene1 } from './animations/AnimatedUI/AniDiv';
import AniDivForLore from './animations/AnimatedUI/AniDivForLore';
import AniDivForEpicGames from './animations/AnimatedUI/AniDivForEpicGames';
import AniDivForMint from './animations/AnimatedUI/AniDivForMint';
import AniDivForMerch from './animations/AnimatedUI/AniDivForMerch';
import AniDivForTeam from './animations/AnimatedUI/AniDivForTeam';
import AniDivForBlackjack from './animations/AnimatedUI/AniDivForBlackjack';
import TargetModel from './animations/AnimatedUI/TargetModel';
import Night from './three/night';
import { useControls } from 'leva';

import StartScreen from './animations/AnimatedUI/StartScreen';

import { Perf } from 'r3f-perf';

import MobileOverlay from '../helpers/MobileOverlay';
import ScrollBlocker from './animations/AnimatedUI/ScrollBlocker';

// CAMERA ANIMATION DATA
import flyThroughState from './animations/FLY5.json';
import NavBarHamOnly from './Layout/NavBarHamOnly';

//
//
//

//
//
//

const Loader = () => {
  const { progress } = useProgress();
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(progress, 'please checl jere')
    if (Number(progress) === 100) {
      dispatch(setProgress(progress));
      dispatch(setLoading(false));
      setTimeout(() => {
        dispatch(setAppear(false));
      }, 2200);
    } else {
      dispatch(setProgress(progress));
    }
  }, [progress]);

  return <></>;
};

function Scene() {
  //

  //
  //
  const [currentPageValue, setCurrentPageValue] = useState(0);

  //
  //
  //

  const [isInPositionScene1, setIsInPositionScene1] = useState(false);
  const [showAniDiv, setShowAniDiv] = useState(false);
  const [showAniDivScene1, setShowAniDivScene1] = useState(false);
  const [showAniDivScene2, setShowAniDivScene2] = useState(false);
  const [showAniDivScene3, setShowAniDivScene3] = useState(false);
  const [showAniDivScene4, setShowAniDivScene4] = useState(false);
  const [showAniDivScene5, setShowAniDivScene5] = useState(false);
  const [showAniDivScene6, setShowAniDivScene6] = useState(false);
  const [showAniDivScene7, setShowAniDivScene7] = useState(false);
  const ref = useRef();

  const handleAniDivS1 = useCallback(() => {
    setShowAniDiv(true);
    setShowAniDivScene1(true);
    setShowAniDivScene2(false);
    setShowAniDivScene3(false);
    setShowAniDivScene4(false);
    setShowAniDivScene5(false);
    setShowAniDivScene6(false);
    setShowAniDivScene7(false);
  }, []);

  const handleAniDivS2 = useCallback(() => {
    setShowAniDiv(true);
    setShowAniDivScene1(false);
    setShowAniDivScene2(true);
    setShowAniDivScene3(false);
    setShowAniDivScene4(false);
    setShowAniDivScene5(false);
    setShowAniDivScene6(false);
    setShowAniDivScene7(false);
  }, []);

  const handleAniDivS3 = useCallback(() => {
    setShowAniDiv(true);
    setShowAniDivScene1(false);
    setShowAniDivScene2(false);
    setShowAniDivScene3(true);
    setShowAniDivScene4(false);
    setShowAniDivScene5(false);
    setShowAniDivScene6(false);
    setShowAniDivScene7(false);
  }, []);

  const handleAniDivS4 = useCallback(() => {
    setShowAniDiv(true);
    setShowAniDivScene1(false);
    setShowAniDivScene2(false);
    setShowAniDivScene3(false);
    setShowAniDivScene4(true);
    setShowAniDivScene5(false);
    setShowAniDivScene6(false);
    setShowAniDivScene7(false);
  }, []);

  const handleAniDivS5 = useCallback(() => {
    setShowAniDiv(true);
    setShowAniDivScene1(false);
    setShowAniDivScene2(false);
    setShowAniDivScene3(false);
    setShowAniDivScene4(false);
    setShowAniDivScene5(true);
    setShowAniDivScene6(false);
    setShowAniDivScene7(false);
  }, []);

  const handleAniDivS6 = useCallback(() => {
    setShowAniDiv(true);
    setShowAniDivScene1(false);
    setShowAniDivScene2(false);
    setShowAniDivScene3(false);
    setShowAniDivScene4(false);
    setShowAniDivScene5(false);
    setShowAniDivScene6(true);
    setShowAniDivScene7(false);
  }, []);

  const handleAniDivS7 = useCallback(() => {
    setShowAniDiv(true);
    setShowAniDivScene1(false);
    setShowAniDivScene2(false);
    setShowAniDivScene3(false);
    setShowAniDivScene4(false);
    setShowAniDivScene5(false);
    setShowAniDivScene6(false);
    setShowAniDivScene7(true);
  }, []);

  const handleCloseAniDiv = useCallback(() => {
    setShowAniDiv(false);
    setShowAniDivScene1(false);
    setShowAniDivScene2(false);
    setShowAniDivScene3(false);
    setShowAniDivScene4(false);
    setShowAniDivScene5(false);
    setShowAniDivScene6(false);
    setShowAniDivScene7(false);
  }, []);

  //

  const sheet = useMemo(
    () =>
      getProject('Fly Through-1', { state: flyThroughState }).sheet('Scene'),
    []
  );

  //

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

  //

  //
  //
  // ****Mobile Scroll Functionality*****
  //
  //

  const [scene0, setScene0] = useState(true);
  const [scene1, setScene1] = useState(false);
  const [scene2, setScene2] = useState(false);
  const [scene3, setScene3] = useState(false);
  const [scene4, setScene4] = useState(false);
  const [scene5, setScene5] = useState(false);
  const [scene6, setScene6] = useState(false);
  const [scene7, setScene7] = useState(false);

  useEffect(() => {
    if (currentPageValue === 0 || currentPageValue === 1) {
      setScene0(true);
      setScene1(false);
      setScene2(false);
      setScene3(false);
      setScene4(false);
      setScene5(false);
      setScene6(false);
      setScene7(false);
    } else if (currentPageValue === 2 || currentPageValue === 3) {
      setScene0(false);
      setScene1(true);
      setScene2(false);
      setScene3(false);
      setScene4(false);
      setScene5(false);
      setScene6(false);
      setScene7(false);
    } else if (currentPageValue === 7 || currentPageValue === 8) {
      setScene0(false);
      setScene1(false);
      setScene2(true);
      setScene3(false);
      setScene4(false);
      setScene5(false);
      setScene6(false);
      setScene7(false);
    } else if (currentPageValue === 11 || currentPageValue === 12) {
      setScene0(false);
      setScene1(false);
      setScene2(false);
      setScene3(true);
      setScene4(false);
      setScene5(false);
      setScene6(false);
      setScene7(false);
    } else if (currentPageValue === 14 || currentPageValue === 15) {
      setScene0(false);
      setScene1(false);
      setScene2(false);
      setScene3(false);
      setScene4(true);
      setScene5(false);
      setScene6(false);
      setScene7(false);
    } else if (currentPageValue === 19) {
      setScene0(false);
      setScene1(false);
      setScene2(false);
      setScene3(false);
      setScene4(false);
      setScene5(true);
      setScene6(false);
      setScene7(false);
    } else if (currentPageValue === 21) {
      setScene0(false);
      setScene1(false);
      setScene2(false);
      setScene3(false);
      setScene4(false);
      setScene5(false);
      setScene6(true);
      setScene7(false);
    } else if (currentPageValue === 29) {
      setScene0(false);
      setScene1(false);
      setScene2(false);
      setScene3(false);
      setScene4(false);
      setScene5(false);
      setScene6(false);
      setScene7(true);
    } else {
      setScene0(false);
      setScene1(false);
      setScene2(false);
      setScene3(false);
      setScene4(false);
      setScene5(false);
      setScene6(false);
      setScene7(false);
    }
  }, [currentPageValue]);

  // useEffect(() => {
  //   console.log('Scene 0:', scene0);
  // }, [scene0]);

  // useEffect(() => {
  //   console.log('Scene 1:', scene1);
  // }, [scene1]);

  // useEffect(() => {
  //   console.log('Scene 2:', scene2);
  // }, [scene2]);

  // useEffect(() => {
  //   console.log('Scene 3:', scene3);
  // }, [scene3]);

  // useEffect(() => {
  //   console.log('Scene 4:', scene4);
  // }, [scene4]);

  // useEffect(() => {
  //   console.log('Scene 5:', scene5);
  // }, [scene5]);

  // useEffect(() => {
  //   console.log('Scene 6:', scene6);
  // }, [scene6]);

  // useEffect(() => {
  //   console.log('Scene 7:', scene7);
  // }, [scene7]);

  //
  //
  //
  //
  //  LIFTED STATE
  //
  const [scrollingUp, setScrollingUp] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(true);
  //

  //
  //
  const [grandChildMounted, setGrandChildMounted] = useState(false);

  const handleGrandChildMount = () => {
    // Update the state when the grandchild component mounts
    setGrandChildMounted(true);
  };

  // useEffect(() => {
  //   console.log(`GrandChild component has mounted: ${grandChildMounted}`);
  // }, [grandChildMounted]);

  //
  //
  //
  const [showScrollBlocker, setShowScrollBlocker] = useState(false);
  useEffect(() => {
    if (scene1 || scene2 || scene3 || scene4 || scene5 || scene6 || scene7) {
      setShowScrollBlocker(true);

      setTimeout(() => {
        setShowScrollBlocker(false);
      }, 1800);
    }
  }, [scene1, scene2, scene3, scene4, scene5, scene6, scene7]);
  //

  return (
    <>
      <Canvas
        ref={ref}
        className='canvas-container'
        id='canvas-222'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#41100e',
          // visibility: isLoading ? "hidden" : "visible",
        }}>
        {/* <Perf /> */}
        <ScrollControls
          infinite={false}
          pages={250}
          damping={1}
          distance={isMobile ? 1.3 : 0.8}
          maxSpeed={isMobile ? 0.1 : 0.35}>
          <SheetProvider sheet={sheet}>
            <SceneContainer
              setCurrentPage={setCurrentPageValue}
              isInPositionScene1={isInPositionScene1}
              setIsInPositionScene1={setIsInPositionScene1}
              showAniDiv={showAniDiv}
              setShowAniDiv={setShowAniDiv}
              handleAniDivS1={handleAniDivS1}
              handleAniDivS2={handleAniDivS2}
              handleAniDivS3={handleAniDivS3}
              handleAniDivS4={handleAniDivS4}
              handleAniDivS5={handleAniDivS5}
              handleAniDivS6={handleAniDivS6}
              handleAniDivS7={handleAniDivS7}
              scrollingUp={scrollingUp}
              scrollingDown={scrollingDown}
              setScrollingUp={setScrollingUp}
              setScrollingDown={setScrollingDown}
              onGrandChildMount={handleGrandChildMount}
              scene0={scene0}
              setScene0={setScene0}
              scene1={scene1}
              setScene1={setScene1}
              scene2={scene2}
              scene3={scene3}
              scene4={scene4}
              scene5={scene5}
              scene6={scene6}
              scene7={scene7}
            />
          </SheetProvider>
        </ScrollControls>
      </Canvas>

      {grandChildMounted && <StartScreen />}
      {/* <MobileOverlay /> */}
      {showScrollBlocker && <ScrollBlocker />}

      {showAniDiv && showAniDivScene1 && (
        <AniDivScene1 setShowAniDiv={setShowAniDiv} />
      )}
      {showAniDiv && showAniDivScene2 && (
        <AniDivForLore
          onClose={() => setShowAniDiv(false)}
          setShowAniDiv={setShowAniDiv}
        />
      )}
      {showAniDiv && showAniDivScene3 && (
        <AniDivForEpicGames
          onClose={() => setShowAniDiv(false)}
          setShowAniDiv={setShowAniDiv}
        />
      )}
      {showAniDiv && showAniDivScene4 && (
        <AniDivForMint
          onClose={() => setShowAniDiv(false)}
          setShowAniDiv={setShowAniDiv}
        />
      )}
      {showAniDiv && showAniDivScene5 && (
        <AniDivForBlackjack
          onClose={() => setShowAniDiv(false)}
          setShowAniDiv={setShowAniDiv}
        />
      )}
      {showAniDiv && showAniDivScene6 && (
        <AniDivForMerch
          onClose={() => setShowAniDiv(false)}
          setShowAniDiv={setShowAniDiv}
        />
      )}
      {showAniDiv && showAniDivScene7 && (
        <AniDivForTeam
          onClose={() => setShowAniDiv(false)}
          setShowAniDiv={setShowAniDiv}
        />
      )}
      <NavBarHamOnly />

      {/* Render AniDiv only when showAniDiv is true */}
    </>
  );
}

//
//
//
//

function Env() {
  return <Environment preset={'night'} blur={0.65} />;
}

//
//
//
//
//

function SceneContainer({
  setCurrentPage,
  isInPositionScene1,
  setIsInPositionScene1,
  isInPositionScene2,
  setIsInPositionScene2,
  showAniDiv,

  handleAniDivS1,
  handleAniDivS2,
  handleAniDivS3,
  handleAniDivS4,
  handleAniDivS5,
  handleAniDivS6,
  handleAniDivS7,

  scrollingUp,
  scrollingDown,
  setScrollingUp,
  setScrollingDown,

  onGrandChildMount,

  scene0,
  setScene0,
  scene1,
  setScene1,
  scene2,
  scene3,
  scene4,
  scene5,
  scene6,
  scene7,
}) {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  //  State to track whether AniDiv should be shown

  // const handleTargetClick = () => {
  //   setShowAniDiv(true)
  // }

  //

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

  //
  //

  //
  //

  //

  //
  //
  //
  //
  //This is for theatre.js
  const sequenceLength = val(sheet.sequence.pointer.length);
  //
  //

  function logCurrentPageCallback(scroll, callback) {
    const currentPage = Math.floor(scroll.offset * scroll.pages) + 1;
    // console.log('Current Page:', currentPage);

    callback(currentPage);
  }

  useFrame(() => {
    if (scroll) {
      logCurrentPageCallback(scroll, setCurrentPage);
      sheet.sequence.position = scroll.offset * sequenceLength;
    }
  });

  //
  //
  //

  const bgColor = '#84a4f4';

  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sunPosition = darkMode ? [-10, -5, -10] : [0, 5, 10];
  const ambientIntensity = darkMode ? 0.2 : 0.5;
  const pointIntensity = darkMode ? 0.5 : 1;

  //
  // ********************
  // *** 3D UI ANIMATION LOGIC
  // ********************
  //
  const groupRefScene1 = useRef(null);

  useEffect(() => {
    // Animate the group scale based on the state value
    gsap.to(groupRefScene1.current.scale, {
      x: scene1 ? 1 : 0,
      y: scene1 ? 1 : 0,
      z: scene1 ? 1 : 0,
      duration: 0.75, // Set the duration of the animation
    });

    gsap.to(groupRefScene1.current.position, {
      y: scene1 ? 0 : +0.9, // Set the Y position to move up or down
      duration: 0.5, // Set the duration of the position animation
    });
  }, [scene1]);
  //
  //
  //
  const groupRefScene2 = useRef(null);

  useEffect(() => {
    // Animate the group scale based on the state value
    gsap.to(groupRefScene2.current.scale, {
      x: scene2 ? 1 : 0,
      y: scene2 ? 1 : 0,
      z: scene2 ? 1 : 0,
      duration: 0.75, // Set the duration of the animation
    });

    gsap.to(groupRefScene2.current.position, {
      y: scene2 ? 0 : +0.9, // Set the Y position to move up or down
      duration: 0.5, // Set the duration of the position animation
    });
  }, [scene2]);

  //
  //
  const groupRefScene3 = useRef(null);

  useEffect(() => {
    // Animate the group scale based on the state value
    gsap.to(groupRefScene3.current.scale, {
      x: scene3 ? 1 : 0,
      y: scene3 ? 1 : 0,
      z: scene3 ? 1 : 0,
      duration: 0.75, // Set the duration of the animation
    });

    gsap.to(groupRefScene3.current.position, {
      y: scene3 ? 0 : +0.9, // Set the Y position to move up or down
      duration: 0.5, // Set the duration of the position animation
    });
  }, [scene3]);
  //
  //
  const groupRefScene4 = useRef(null);

  useEffect(() => {
    // Animate the group scale based on the state value
    gsap.to(groupRefScene4.current.scale, {
      x: scene4 ? 1 : 0,
      y: scene4 ? 1 : 0,
      z: scene4 ? 1 : 0,
      duration: 0.75, // Set the duration of the animation
    });

    gsap.to(groupRefScene4.current.position, {
      y: scene4 ? 0 : +0.9, // Set the Y position to move up or down
      duration: 0.5, // Set the duration of the position animation
    });
  }, [scene4]);
  //
  //
  const groupRefScene5 = useRef(null);

  useEffect(() => {
    // Animate the group scale based on the state value
    gsap.to(groupRefScene5.current.scale, {
      x: scene5 ? 1 : 0,
      y: scene5 ? 1 : 0,
      z: scene5 ? 1 : 0,
      duration: 0.75, // Set the duration of the animation
    });

    gsap.to(groupRefScene5.current.position, {
      y: scene5 ? 0 : +0.9, // Set the Y position to move up or down
      duration: 0.5, // Set the duration of the position animation
    });
  }, [scene5]);
  //
  //
  const groupRefScene6 = useRef(null);

  useEffect(() => {
    // Animate the group scale based on the state value
    gsap.to(groupRefScene6.current.scale, {
      x: scene6 ? 1 : 0,
      y: scene6 ? 1 : 0,
      z: scene6 ? 1 : 0,
      duration: 0.75, // Set the duration of the animation
    });

    gsap.to(groupRefScene6.current.position, {
      y: scene6 ? 0 : +0.9, // Set the Y position to move up or down
      duration: 0.5, // Set the duration of the position animation
    });
  }, [scene6]);
  //
  //
  const groupRefScene7 = useRef(null);

  useEffect(() => {
    // Animate the group scale based on the state value
    gsap.to(groupRefScene7.current.scale, {
      x: scene7 ? 1 : 0,
      y: scene7 ? 1 : 0,
      z: scene7 ? 1 : 0,
      duration: 0.75, // Set the duration of the animation
    });

    gsap.to(groupRefScene7.current.position, {
      y: scene7 ? 0 : +0.9, // Set the Y position to move up or down
      duration: 0.5, // Set the duration of the position animation
    });
  }, [scene7]);
  //
  //  USER SCROLL STATE CONTROLS
  //
  //
  const { offset } = useScroll();
  const prevOffset = useRef(0);

  useEffect(() => {
    if (offset < prevOffset.current) {
      setScrollingUp(true);
      setScrollingDown(false);
    } else if (offset > prevOffset.current) {
      setScrollingUp(false);
      setScrollingDown(true);
    }

    prevOffset.current = offset;
  }, [offset, setScrollingUp, setScrollingDown]);

  // useEffect(() => {
  //   if (scrollingUp) {
  //     console.log('Scrolling up');
  //   } else if (scrollingDown) {
  //     console.log('Scrolling down');
  //   }
  // }, [scrollingUp, scrollingDown]);

  //
  //
  //
  // ****************************
  // *****************AUDIO
  // ****************************
  //
  const [isMuted, setIsMuted] = useState(false);
  const audio = useRef(new Audio('/Ambience_Horror_Classic_02.wav'));
  const playbackPosition = useRef(0);

  const handleSoundToggle = () => {
    setIsMuted((prevState) => !prevState);
  };

  const handleSoundToggleOnStart = () => {
    if (isMuted) {
      setIsMuted(false);
    }
  };

  const handlePause = () => {
    playbackPosition.current = audio.current.currentTime;
  };

  const handleEnded = () => {
    playbackPosition.current = 0;
  };

  useEffect(() => {
    audio.current.loop = true;

    audio.current.addEventListener('pause', handlePause);
    audio.current.addEventListener('ended', handleEnded);

    if (!isMuted) {
      audio.current.currentTime = playbackPosition.current;
      audio.current.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    } else {
      audio.current.pause();
    }

    return () => {
      audio.current.removeEventListener('pause', handlePause);
      audio.current.removeEventListener('ended', handleEnded);
      audio.current.pause();
    };
  }, [isMuted]);
  //
  //
  //Scene AUDIOS
  // Scene 1
  useEffect(() => {
    const audioGunShot = new Audio('/Shotgun_Shot.wav');
    const audioZombie = new Audio('/zombieGrowl.wav');

    const playAudioScene1 = (audio, delay) => {
      setTimeout(() => {
        // console.log('playing');
        audio.loop = false; // Disable looping
        audio.play().catch((error) => {
          // Handle playback error if necessary
          console.error('Error playing audio:', error);
        });
      }, delay);
    };

    if (scene1) {
      playAudioScene1(audioGunShot, 0); // Play the gun shot sound immediately
      playAudioScene1(audioZombie, 700); // Play the zombie sound after a 0.7-second delay
    }

    return () => {
      if (audioGunShot) {
        audioGunShot.pause();
        audioGunShot.currentTime = 0;
      }
      if (audioZombie) {
        audioZombie.pause();
        audioZombie.currentTime = 0;
      }
    };
  }, [scene1]);

  // Scene 2
  useEffect(() => {
    const audioZombie2 = new Audio('/zombieScream.wav');

    const playAudioScene2 = (audio, delay) => {
      setTimeout(() => {
        // console.log('playing');
        audio.loop = false; // Disable looping
        audio.play().catch((error) => {
          // Handle playback error if necessary
          console.error('Error playing audio:', error);
        });
      }, delay);
    };

    if (scene2) {
      playAudioScene2(audioZombie2, 500); // Play the zombie sound after a 0.7-second delay
    }

    return () => {
      if (audioZombie2) {
        audioZombie2.pause();
        audioZombie2.currentTime = 0;
      }
    };
  }, [scene2]);
  //
  // Scene 3
  //
  useEffect(() => {
    const audioHandGunShot = new Audio('/handgun.wav');
    const audioZombie = new Audio('/zombieGrowl.wav');

    const playAudioScene3 = (audio, delay) => {
      setTimeout(() => {
        // console.log('playing');
        audio.loop = false; // Disable looping
        audio.play().catch((error) => {
          // Handle playback error if necessary
          console.error('Error playing audio:', error);
        });
      }, delay);
    };

    if (scene3) {
      playAudioScene3(audioHandGunShot, 200); // Play the gun shot sound immediately

      playAudioScene3(audioZombie, 500); // Play the zombie sound after a 0.7-second delay
    }

    return () => {
      if (audioHandGunShot) {
        audioHandGunShot.pause();
        audioHandGunShot.currentTime = 0;
      }
      if (audioZombie) {
        audioZombie.pause();
        audioZombie.currentTime = 0;
      }
    };
  }, [scene3]);

  //
  // Scene 4
  //
  useEffect(() => {
    const audioHandGunShot = new Audio('/handgun.wav');
    const audioZombie = new Audio('/zombieGrowl.wav');
    const audioZombieEat = new Audio('/zombieEat.wav');

    const playAudioScene4 = (audio, delay) => {
      setTimeout(() => {
        // console.log('playing');
        audio.loop = false; // Disable looping
        audio.play().catch((error) => {
          // Handle playback error if necessary
          console.error('Error playing audio:', error);
        });
      }, delay);
    };

    if (scene4) {
      playAudioScene4(audioZombieEat, 100);
      playAudioScene4(audioHandGunShot, 3000);

      playAudioScene4(audioZombie, 4000);
    }

    return () => {
      if (audioHandGunShot) {
        audioHandGunShot.pause();
        audioHandGunShot.currentTime = 0;
      }
      if (audioZombie) {
        audioZombie.pause();
        audioZombie.currentTime = 0;
      }
      if (audioZombieEat) {
        audioZombie.pause();
        audioZombie.currentTime = 0;
      }
    };
  }, [scene4]);

  //
  // Scene 5
  //
  useEffect(() => {
    const audioZombieEat = new Audio('/zombieEat.wav');

    const playAudioScene5 = (audio, delay) => {
      setTimeout(() => {
        // console.log('playing');
        audio.currentTime = 0; // Reset audio to the beginning
        audio.play().catch((error) => {
          // Handle playback error if necessary
          console.error('Error playing audio:', error);
        });
      }, delay);
    };

    if (scene5) {
      const playCount = 2;
      const timeBetweenPlays = 3.8 * 1000;

      for (let i = 0; i < playCount; i++) {
        const playDelay = i * timeBetweenPlays;
        playAudioScene5(audioZombieEat, playDelay); // Play the audio file twice with the specified delay
      }
    }

    return () => {
      if (audioZombieEat) {
        audioZombieEat.pause();
        audioZombieEat.currentTime = 0;
      }
    };
  }, [scene5]);
  //
  //
  // Scene 6
  //
  useEffect(() => {
    const audioHandGunShot = new Audio('/handgun.wav');
    const audioZombie = new Audio('/zombieGrowl.wav');
    const audioZombieEat = new Audio('/zombieEat.wav');

    const playAudioScene6 = (audio, delay) => {
      setTimeout(() => {
        // console.log('playing');
        audio.loop = false; // Disable looping
        audio.play().catch((error) => {
          // Handle playback error if necessary
          console.error('Error playing audio:', error);
        });
      }, delay);
    };

    if (scene6) {
      playAudioScene6(audioZombieEat, 100);
      playAudioScene6(audioHandGunShot, 3000);

      playAudioScene6(audioZombie, 4000);
    }

    return () => {
      if (audioHandGunShot) {
        audioHandGunShot.pause();
        audioHandGunShot.currentTime = 0;
      }
      if (audioZombie) {
        audioZombie.pause();
        audioZombie.currentTime = 0;
      }
      if (audioZombieEat) {
        audioZombie.pause();
        audioZombie.currentTime = 0;
      }
    };
  }, [scene6]);

  //
  //
  // Scene 7
  //
  useEffect(() => {
    const audioHandGunShot = new Audio('/handgun.wav');
    const audioZombie = new Audio('/zombieGrowl.wav');
    const audioZombieEat = new Audio('/zombieEat.wav');

    const playAudioScene7 = (audio, delay) => {
      setTimeout(() => {
        // console.log('playing');
        audio.loop = false; // Disable looping
        audio.play().catch((error) => {
          // Handle playback error if necessary
          console.error('Error playing audio:', error);
        });
      }, delay);
    };

    if (scene7) {
      playAudioScene7(audioZombieEat, 100);
      playAudioScene7(audioHandGunShot, 3000);

      playAudioScene7(audioZombie, 4000);
    }

    return () => {
      if (audioHandGunShot) {
        audioHandGunShot.pause();
        audioHandGunShot.currentTime = 0;
      }
      if (audioZombie) {
        audioZombie.pause();
        audioZombie.currentTime = 0;
      }
      if (audioZombieEat) {
        audioZombie.pause();
        audioZombie.currentTime = 0;
      }
    };
  }, [scene7]);

  return (
    <>
      {/* <EffectComposer>
        <Noise premultiply blendFunction={BlendFunction.ADD} />
      </EffectComposer> */}
      <Stars />
      <Night />
      <Night />
      <e.fog theatreKey='FOG' attach='fog' color='red' near={1} far={10} />
      <e.ambientLight theatreKey='ambientLight' intensity={0.02} />
      <e.spotLight
        theatreKey='spotLight'
        intensity={1}
        position={[4.4, 1, 1.4]}
      />
      <e.pointLight
        theatreKey='pointLight'
        position={[0, 0, 0]}
        intensity={0.1}
      />
      <Suspense fallback={<Loader />}>
        <WildWestTown onGrandChildMount={onGrandChildMount} />
        {/* <mesh onClick={toggleDarkMode} position={[0, 1, -5]}>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={darkMode ? 'gray' : 'blue'} />
        </mesh> */}
      </Suspense>

      <PerspectiveCamera
        theatreKey='Camera'
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
      {/* SCENE 1  */}
      <group position={[0.65, 0.05, 0.2]}>
        <group ref={groupRefScene1}>
          <mesh>
            <TargetModel
              position={[2.99, 0.18, 1]}
              rotation={[0, 0, 0]}
              scale={1}
              onClick={handleAniDivS1}
            />

            <group>
              <Text
                font='/Cowboy_Movie.ttf'
                position={[2.88, 0.35, 0.9]}
                rotation={[0, 1.18, 0]}
                scale={0.041}>
                WATCH THE CINEMATIC SHOWDOWN
              </Text>
              <Text
                position={[2.68, 0.36, 0.81]}
                rotation={[0, 1.18, 0]}
                scale={0.02}>
                Trailer
              </Text>
            </group>
          </mesh>
        </group>
      </group>
      {/* SCENE 2 */}
      <group position={[0.1, 0.05, -1.3]}>
        <group ref={groupRefScene2}>
          <mesh>
            <TargetModel
              position={[2.99, 0.18, 1]}
              rotation={[0, -1, 0]}
              scale={1}
              onClick={handleAniDivS2}
            />

            <group>
              <Text
                font='/Cowboy_Movie.ttf'
                position={[3, 0.31, 1]}
                rotation={[0, -0.1, 0]}
                scale={0.041}>
                UNEARTH THE UNTOLD SECRETS
              </Text>
              <Text
                position={[3, 0.31, 0.9]}
                rotation={[0, -0.07, 0]}
                scale={0.02}>
                Lore of Wild West Undead
              </Text>
            </group>
          </mesh>
        </group>
      </group>
      {/* SCENE 3 */}
      <group position={[-1.3, 0.05, -1.3]}>
        <group ref={groupRefScene3}>
          <mesh>
            <TargetModel
              position={[2.99, 0.18, 1]}
              rotation={[0, -0.1, 0]}
              scale={1}
              onClick={handleAniDivS3}
            />

            <group>
              <Text
                font='/Cowboy_Movie.ttf'
                position={[3.1, 0.31, 1]}
                rotation={[0, 0.9, 0]}
                scale={0.041}>
                RIDE INTO THE APOCALYPSE
              </Text>
              <Text
                position={[3.1, 0.26, 1]}
                rotation={[0, 0.9, 0]}
                scale={0.02}>
                Play Wild West Undead on Epic Games Store
              </Text>
            </group>
          </mesh>
        </group>
      </group>
      {/* SCENE 4 */}
      <group position={[-1.7, 0.05, -0]}>
        <group ref={groupRefScene4}>
          <mesh>
            <TargetModel
              position={[2.99, 0.18, 1]}
              rotation={[0, 1.3, 0]}
              scale={1}
              onClick={handleAniDivS4}
            />

            <group>
              <Text
                font='/Cowboy_Movie.ttf'
                position={[3.1, 0.31, 1]}
                rotation={[0, 2.6, 0]}
                scale={0.049}>
                EMBRACE THE CURSE
              </Text>
              <Text
                position={[3.1, 0.26, 1]}
                rotation={[0, 2.7, 0]}
                scale={0.02}>
                Claim Your Undead Pass
              </Text>
            </group>
          </mesh>
        </group>
      </group>
      {/* SCENE 5 */}
      <group position={[-2.18, -0, -1.2]}>
        <group ref={groupRefScene5}>
          <mesh>
            <TargetModel
              position={[3.055, 0.19, 0.95]}
              rotation={[0, -0.8, 0]}
              scale={1}
              onClick={handleAniDivS5}
            />

            <group>
              <Text
                font='/Cowboy_Movie.ttf'
                position={[3.1, 0.31, 1]}
                rotation={[0, 0.4, 0]}
                scale={0.049}>
                JOIN THE UNDYING OUTLAWS
              </Text>
              <Text
                position={[3.1, 0.26, 1]}
                rotation={[0, 0.4, 0]}
                scale={0.02}>
                Survive the Horror
              </Text>
            </group>
          </mesh>
        </group>
      </group>
      {/* SCENE 6 */}
      <group position={[-2.85, 0.1, -0.6]}>
        <group ref={groupRefScene6}>
          <mesh>
            <TargetModel
              position={[2.9, 0.19, 1]}
              rotation={[0, 0.5, 0]}
              scale={1}
              onClick={handleAniDivS6}
            />

            <group>
              <Text
                font='/Cowboy_Movie.ttf'
                position={[3.1, 0.31, 1]}
                rotation={[0, 2, 0]}
                scale={0.049}>
                THE UNDEAD OUTPOST
              </Text>
              <Text
                position={[3.14, 0.26, 1]}
                rotation={[0, 2, 0]}
                scale={0.02}>
                Merchandise
              </Text>
            </group>
          </mesh>
        </group>
      </group>
      {/* SCENE 7 */}
      <group position={[-4.9, 0.1, -1.02]}>
        <group ref={groupRefScene7}>
          <mesh>
            <TargetModel
              position={[3.3, 0.15, 1]}
              rotation={[0, 0.15, 0]}
              scale={1}
              onClick={handleAniDivS7}
            />

            <group>
              <Text
                font='/Cowboy_Movie.ttf'
                position={[3.1, 0.31, 1]}
                rotation={[0, 1.5, 0]}
                scale={0.049}
                color={0xffffff}>
                BEHIND THE VEIL
              </Text>
              <Text
                position={[3.14, 0.26, 1]}
                rotation={[0, 1.5, 0]}
                scale={0.02}
                color={0xffffff}>
                Meet the Wild West Undead Team
              </Text>
            </group>
          </mesh>
        </group>
      </group>
    </>
  );
}

export default Scene;
