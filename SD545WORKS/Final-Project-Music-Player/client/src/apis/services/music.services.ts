import SignIn from "../../types/signIn.types";
import Playlist from "../../types/removePlaylist.types";
import http from "../axios";

const signIn = (data: SignIn) => {
  return http.post("auth/login", data);
};
const getMusicDB = () => {
  return http.get("/music");
};
const getbyTitle = (searchString: string) => {
  return http.get(`/music?search=${searchString}`);
};

const getPlaylist = () => {
  return http.get("/playlist");
};
//fetching the playlist that we already have

const addPlaylist = (data: Playlist) => {
  return http.post("/playlist/add", data);
};
const removePlaylist = (data: Playlist) => {
  return http.post("/playlist/remove", data);
};

export default {
  signIn,
  getMusicDB,
  getbyTitle,
  addPlaylist,
  getPlaylist,
  removePlaylist,
};
