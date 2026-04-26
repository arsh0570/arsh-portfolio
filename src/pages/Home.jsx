import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import DayGroup from '../components/DayGroup';
import NightGroup from '../components/NightGroup';
import sakura from '../assets/Nebula.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const { theme } = useTheme();
  
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  useEffect(() => {
    const audio = new Audio(sakura);
    audio.volume = 0.5;
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Audio playback failed:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

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