import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import nightSkyScene from "../assets/3d/tundra_sky.glb";

export function NightSky({ isRotating }) {
  const nightSky = useGLTF(nightSkyScene);
  const nightSkyRef = useRef();

  // Darken the sky on load
  useEffect(() => {
    if (nightSky.scene) {
      nightSky.scene.traverse((obj) => {
        if (obj.isMesh) {
          // If the material is a standard material, reduce emissive and color
          if (obj.material.emissive) {
            obj.material.emissive.multiplyScalar(0.2); // reduce glow
          }
          // Darken the base color (multiply by a dark factor)
          if (obj.material.color) {
            obj.material.color.multiplyScalar(0.3); // adjust as needed
          }
          // If it's an unlit material, convert to a lit one
          if (obj.material.type === 'MeshBasicMaterial') {
            obj.material = new THREE.MeshStandardMaterial();
            obj.material.color.setHex(0x224466); // dark blue-grey
            obj.material.emissive.setHex(0x000000);
          }
        }
      });
    }
  }, [nightSky.scene]);

  useFrame((_, delta) => {
    if (isRotating) {
      nightSkyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={nightSkyRef}>
      <primitive object={nightSky.scene} />
    </mesh>
  );
}

export default NightSky;