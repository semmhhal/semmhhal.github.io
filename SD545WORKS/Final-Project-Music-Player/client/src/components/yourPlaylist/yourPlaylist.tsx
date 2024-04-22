import React, { useState, MouseEvent } from "react";
import { PlayData } from "../../types/playlist.types";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

type Props = {
  playlistData: PlayData[];
  onhandleRemoving: (id: string) => void;
};
export default function YourPlaylist(prop: Props) {
  const [source, setSource] = useState<string>("");
  const { playlistData, onhandleRemoving } = prop;

  const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setSource(value);
  };

  return (
    <div>
      <h4 style={{ padding: "50px", marginLeft: "15px" }}>Your Playlist:</h4>
      <table
        className="table table-white table-sm table-hover"
        style={{ width: "1600px", marginLeft: "170px" }}
      >
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {playlistData.map((playlist, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{index}</th>
              <td>{playlist.title}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ marginRight: "16px" }}
                  onClick={() => onhandleRemoving(playlist.songId)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-dash-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"></path>
                  </svg>
                  <span className="visually-hidden">Button</span>
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ marginRight: "16px" }}
                  value={playlist.urlPath}
                  onClick={handleButton}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-play"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"></path>
                  </svg>
                  <span className="visually-hidden">Button</span>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <MusicPlayer src={source} playlistdata={playlistData} />
    </div>
  );
}
