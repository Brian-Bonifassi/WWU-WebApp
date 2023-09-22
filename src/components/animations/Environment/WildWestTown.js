import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export default function WildWestTown({ onGrandChildMount }) {
  const gltf = useGLTF('/assets/scene_setF-v1.glb');

  useEffect(() => {
    // Call the function passed from the Child component when the component mounts
    onGrandChildMount();
  }, [onGrandChildMount]);

  return <primitive object={gltf.scene} scale={0.1} />;
}
