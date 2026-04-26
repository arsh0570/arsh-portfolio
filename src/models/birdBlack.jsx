import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three'; // for Color
import birdBlackScene from '../assets/3d/birdBlack.glb';

const BirdBlack = ({ isRotating, birdColor = '#FBCEB1', ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(birdBlackScene);
  const { actions } = useAnimations(animations, ref);

  // --- Change the bird's color whenever birdColor prop changes ---
  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        // Handle both single material and material array
        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => mat.color.set(birdColor));
        } else {
          child.material.color.set(birdColor);
        }
      }
    });
  }, [scene, birdColor]);

  // Optional: log animation names for debugging
  useEffect(() => {
    console.log(animations.map(a => a.name)); // Should show ["Scene"]
  }, [animations]);

  // Play/stop the animation based on isRotating
  useEffect(() => {
    // If there are no animations, do nothing
    if (!actions || Object.keys(actions).length === 0) return;

    const action = actions['Scene']; // Use the actual animation name
    if (!action) return;

    if (isRotating) {
      action.play();
    } else {
      action.stop();
    }
  }, [actions, isRotating]);

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default BirdBlack;