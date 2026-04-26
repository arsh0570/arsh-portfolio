import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTheme } from '../context/ThemeContext';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import DayGroup from '../components/DayGroup';
import NightGroup from '../components/NightGroup';
import sakura from '../assets/Nebula.mp3';
import { soundoff, soundon } from '../assets/icons'; // Added soundon icon for logic

const Home = () => {
  const { theme } = useTheme();
  
  // Audio state and refs
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  // 3D Scene state
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  // 1. Initialize Audio only once when the component mounts
  useEffect(() => {
    const audio = new Audio(sakura);
    audio.volume = 0.5;
    audio.loop = true;
    audioRef.current = audio;

    // Cleanup: Pause audio when navigating away from Home
    return () => {
      audio.pause();
    };
  }, []);

  // 2. Handle Audio Play/Pause based on state
  useEffect(() => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Audio playback failed. User interaction usually required first.", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  return (
    <section className="w-full h-screen relative">
      {/* Overlay Information */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* Important: Ensure Loader.jsx uses the <Html> tag from @react-three/drei */}
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

      {/* Audio Toggle Button */}
      <div className='absolute bottom-5 left-5 z-20'>
        <img
          src={isAudioPlaying ? soundon : soundoff}
          alt="Toggle Sound"
          className='w-12 h-12 cursor-pointer object-contain hover:scale-110 transition-transform'
          onClick={() => setIsAudioPlaying(!isAudioPlaying)}
        />
      </div>
    </section>
  );
};

export default Home;