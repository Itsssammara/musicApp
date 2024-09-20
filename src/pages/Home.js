import React, { useState } from 'react';
import Player from '../components/Player';
import SongCard from '../components/SongCard';
import Search from '../pages/Search';

const Home = () => {
  const [currentSong, setCurrentSong] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);

  const songs = [
    { title: "Rocketeer", url: "/assets/songs/Far East Movement, Ryan Tedder - Rocketeer (Lyrics).mp3" },
    { title: "Fly N Ghetto", url: "/assets/songs/Ayo & Teo - Fly N Ghetto (Lyrics).mp3" }
  ];
  

  // Initialize with all songs displayed
  useState(() => setFilteredSongs(songs), []);

  return (
    <div className='.home-container'>
      <h2>Home</h2>

      {/* Add Search component */}
      <Search songs={songs} setFilteredSongs={setFilteredSongs} />

      {/* Display the filtered list of songs */}
      <div className='.song-list'>
        {filteredSongs.map((song, index) => (
          <SongCard key={index} song={song} setCurrentSong={setCurrentSong} />
        ))}
      </div>

      {/* Player to play current song */}
      <Player currentSong={currentSong} />
    </div>
  );
};

export default Home;
