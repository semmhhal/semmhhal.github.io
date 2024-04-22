import React, { useState, useEffect, ChangeEvent } from "react";
import PubSub from "pubsub-js";
import Header from "../components/header/header";
import GenSongList from "../components/GeneralSongList/GenSongList";
import YourPlaylist from "../components/yourPlaylist/yourPlaylist";
import MusicDB from "../types/musicDB.types";
import musicServices from "../apis/services/music.services";
import { PlayData } from "../types/playlist.types";

export default function Homepage() {
  const [songDB, setSongDB] = useState<MusicDB[]>([]);
  const [search, setSearch] = useState<string>("");
  const [playlistData, setPlaylist] = useState<PlayData[]>([]);
  const userId = sessionStorage.getItem("userId");

  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    const response = await musicServices.getbyTitle(e.target.value);
    const data = response.data;
    console.log("data=", data);
    setSongDB(data);
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

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await musicServices.getPlaylist();
        const data = await response.data;
        const filteredPlaylist = data.filter(
          (playlist: PlayData) => playlist.userId === userId
        );
        console.log(filteredPlaylist);
        setPlaylist(filteredPlaylist);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };
    const subscribePlaylist = () => {
      PubSub.subscribe("playlistUpdate", fetchPlaylistData); //listening to updates
    };

    fetchPlaylistData();
    subscribePlaylist();

    return () => {
      PubSub.unsubscribe(fetchPlaylistData);
    };
  }, []);

  const handleRemoving = async (id: string) => {
    try {
      const songId = id;
      const response = await musicServices.removePlaylist({ songId });
      const data = response.data;
      const deletedPlaylist = data.filter(
        (item: PlayData) => item.songId !== id
      );
      setPlaylist(deletedPlaylist);
      console.log(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div>
      <Header search={search} onHandleChange={handleSearchChange} />
      <GenSongList songlist={songDB} />
      <YourPlaylist
        playlistData={playlistData}
        onhandleRemoving={handleRemoving}
      />
    </div>
  );
}
