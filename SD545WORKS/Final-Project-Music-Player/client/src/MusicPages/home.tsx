import React from "react";
import Header from "../components/header/header";
import GenSongList from "../components/GeneralSongList/GenSongList";
import YourPlaylist from "../components/yourPlaylist/yourPlaylist";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
export default function Homepage() {
  return (
    <div>
      <Header />
      <GenSongList />
      <YourPlaylist />
      <MusicPlayer />
    </div>
  );
}
