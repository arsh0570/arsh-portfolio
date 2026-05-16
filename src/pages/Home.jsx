import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import DayGroup from '../components/DayGroup';
import NightGroup from '../components/NightGroup';

import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const { theme } = useTheme();
  
  const audioRef = useRef(null);
  
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* pages={4} determines the scroll length. damping={0.25} creates smooth movement */}
          <ScrollControls pages={4} damping={0.25}>
            {theme === 'day' ? (
              <DayGroup
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
              />
            ) : (
              <NightGroup
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
              />
            )}
          </ScrollControls>
        </Suspense>
      </Canvas>

      
    </section>
  );
};

export default Home;