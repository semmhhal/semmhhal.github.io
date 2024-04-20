import SignIn from "../../types/signIn.types";
import MusicDB from "../../types/musicDB.types";
import http from "../axios";

const signIn = (data: SignIn) => {
  return http.post("auth/login", data);
};
const getMusicDB = () => {
  return http.get("/music");
};

const postSongDB = (data: MusicDB) => {
  return http.post("/homepage", data);
};

export default {
  signIn,
  getMusicDB,
};
