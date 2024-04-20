import React, { useState, useEffect } from "react";
import MusicDB from "../../types/musicDB.types";
import musicServices from "../../apis/services/music.services";
export default function GenSongList() {
  const [songDB, setSongDB] = useState<MusicDB[]>([]);

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
      <h2 style={{ padding: "30px", marginLeft: "20px" }}>
        🎉 Welcome! Semhal
      </h2>
      <hr />
      <h4 style={{ padding: "60px" }}> Songs You may be Interested In:</h4>
      <table
        className="table table-white table-sm table-hover"
        style={{ width: "1600px", marginLeft: "170px" }}
      >
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Title</th>
            <th scope="col">Release Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {songDB.map((song, index) => (
          <tbody>
            <tr>
              <th scope="row">{index}</th>
              <td>{song.title}</td>
              <td>{song.releaseDate}</td>
              <td>
                <button type="button" className="btn btn-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
