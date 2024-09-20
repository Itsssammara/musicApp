import React, { useEffect, useRef } from 'react';

const Player = ({ currentSong }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong;
      audioRef.current.play().catch((error) => {
        console.error("Failed to play the song:", error);
      });
    }
  }, [currentSong]);

  return (
    <div className="player-container">
      <audio ref={audioRef} controls />
    </div>
  );
};

export default Player;
