import { useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import HillCabin from '../models/hillCabin';
import NightSky from '../models/nightSky';
import BirdBlack from '../models/birdBlack';
import { useMediaQuery } from 'react-responsive';

const NightGroup = ({ isRotating, setIsRotating, setCurrentStage }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const scroll = useScroll(); // Ensure this is present!

  // Positions and scales
  const cabinPosition = [0, -6.5, -43];
  const cabinScale = isMobile ? [0.8, 0.8, 0.8] : [1.2, 1.2, 1.2];
  const cabinRotation = [0.1, 4.7, 0];

  const adjustBBForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [-1, 2, -4];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [-1, 3, -4];
    }
    return [screenScale, screenPosition];
  };

  const [BBScale, BBPosition] = adjustBBForScreenSize();

  // This ensures the bird animates when you scroll
  useFrame(() => {
    const isMoving = scroll.delta > 0; 
    if (isMoving !== isRotating) {
      setIsRotating(isMoving);
    }
  });

  return (
    <group>
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={0.5} />
      <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

      <NightSky distance={450000} sunPosition={[0, 1, 0]} inclination={0.5} turbidity={10} />

      <HillCabin
        position={cabinPosition}
        scale={cabinScale}
        rotation={cabinRotation}
        setCurrentStage={setCurrentStage}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
      />
      
      <BirdBlack
        position={BBPosition}
        scale={BBScale}
        rotation={[0, 20, 0]} 
        isRotating={isRotating}
      />
    </group>
  );
};

export default NightGroup;