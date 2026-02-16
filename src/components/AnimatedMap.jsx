import { useEffect, useState } from "react";
import WorldMap from "./WorldMap";

const AnimatedMap = () => {
  const [animationState, setAnimationState] = useState("international");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsPlaying(true);
    }, 500);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const sequence = [
      { state: "international", delay: 0 },
      { state: "americas", delay: 4000 },
      { state: "africa", delay: 8000 },
    ];

    const timers = sequence.map(({ state, delay }) =>
      setTimeout(() => setAnimationState(state), delay)
    );

    const loopTimer = setTimeout(() => {
      setAnimationState("international");
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 500);
    }, 12000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(loopTimer);
    };
  }, [isPlaying]);

  return (
    <div
      className={`
        c-homepage-animation
        ${isPlaying ? "c-homepage-animation--play" : ""}
        c-homepage-animation--${animationState}
      `}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <div className="c-homepage-animation__curve" />
      
      <div className="c-homepage-animation__worldmap">
        <WorldMap />
      </div>
    </div>
  );
};

export default AnimatedMap;