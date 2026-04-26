import { useState, Suspense, useEffect, useRef, use } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTheme } from '../context/ThemeContext';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import DayGroup from '../components/DayGroup';
import NightGroup from '../components/NightGroup';
import sakura from '../assets/Nebula.mp3';

import { soundoff } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.5;
  audioRef.current.loop = true;

  const { theme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    } return () => {
      audioRef.current.pause();
    }
  } , [isAudioPlaying]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isAudioPlaying ? soundoff : soundoff}
          alt="Toggle Sound"
          className ='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsAudioPlaying(!isAudioPlaying)}
        />

      </div>
    </section>
  );
};

export default Home;