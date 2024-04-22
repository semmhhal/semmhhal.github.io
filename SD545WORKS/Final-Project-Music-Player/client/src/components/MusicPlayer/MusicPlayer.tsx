import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { PlayData } from "../../types/playlist.types";

type Props = {
  src: string;
  playlistdata: PlayData[];
};
export default function MusicPlayer(props: Props) {
  const { src, playlistdata } = props;

  const music = playlistdata.find((song) => song.urlPath === src);
  return (
    <div style={{ padding: "20px" }}>
      {music ? <h4>{music.title}</h4> : <h4>Play Song</h4>}
      <AudioPlayer
        autoPlay={true}
        src={`http://localhost:3000/${src}`}
        volume={1}
        muted={false}
        onPlay={() => console.log("on play")}
        showSkipControls
      />
    </div>
  );
}
