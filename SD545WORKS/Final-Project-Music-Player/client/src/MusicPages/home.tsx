import React, { useState, useEffect, ChangeEvent } from "react";
import Header from "../components/header/header";
import GenSongList from "../components/GeneralSongList/GenSongList";
import YourPlaylist from "../components/yourPlaylist/yourPlaylist";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import MusicDB from "../types/musicDB.types";
import musicServices from "../apis/services/music.services";

export default function Homepage() {
  const [songDB, setSongDB] = useState<MusicDB[]>([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const addMusic = async () => {
      try {
        const response = await musicServices.getMusicDB();
        const data = await response.data;
        console.log(data);
        setSongDB(data);
      } catch (e) {
        console.error(e);
      }
    };
    addMusic();
  }, []);

  return (
    <div>
      <Header search={search} onHandleChange={handleSearchChange} />
      <GenSongList songlist={songDB} />
      <YourPlaylist />
      <MusicPlayer />
    </div>
  );
}
