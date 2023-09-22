import React, { useEffect, useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { getProject } from '@theatre/core'
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import extension from '@theatre/r3f/dist/extension'

import studio from '@theatre/studio'

import flyThroughState from './animations/wwuFly5.json'
import WildWestTown from './animations/Environment/WildWestTown'

function MobileScene() {
  const sheet = getProject('Fly Through-1', {
    state: flyThroughState,
  }).sheet('Scene')

  console.log(sheet)
  useEffect(() => {
    console.log('useEffect triggered')

    sheet.project.ready.then(() => {
      sheet.sequence.play()
    })
  }, [])

  //   useEffect(() => {
  //     const checkScreenSize = () => {
  //       setIsMobile(window.innerWidth <= 1021) // Set isMobile based on the screen width
  //     }

  //     checkScreenSize()

  //     window.addEventListener('resize', checkScreenSize)
  //     return () => {
  //       window.removeEventListener('resize', checkScreenSize)
  //     }
  //   }, [])

  return (
    <>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
          // visibility: isLoading ? "hidden" : "visible",
        }}>
        <SheetProvider sheet={sheet}>
          <SceneContainer />
        </SheetProvider>
      </Canvas>
    </>
  )
}

function SceneContainer() {
  return (
    <>
      {/* <PerspectiveCamera
        // theatreKey='Camera'
        makeDefault
        position={[1, 0.9, 8]}
        fov={90}
        near={0.1}
        far={70}
      /> */}
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <WildWestTown />
      </Suspense>
    </>
  )
}

export default MobileScene
