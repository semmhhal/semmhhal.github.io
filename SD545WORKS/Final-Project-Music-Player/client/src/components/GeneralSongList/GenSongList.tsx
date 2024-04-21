import MusicDB from "../../types/musicDB.types";
import musicServices from "../../apis/services/music.services";
import { PlayData } from "../../types/playlist.types";

type Props = {
  songlist: MusicDB[];
};
export default function GenSongList(props: Props) {
  const { songlist } = props;

  const handleAdding = async (id: string) => {
    // const userId = sessionStorage.getItem("userId");
    const songId = id;
    console.log(songId);
    // console.log(userId);
    const response = await musicServices.addPlaylist({ songId });
    //publish here
    const data: PlayData[] = await response.data;
    PubSub.publish("playlistUpdate", data);
    console.log(data);
  };

  return (
    <div>
      <h2 style={{ padding: "30px", marginLeft: "20px" }}>🎉 Welcome!</h2>
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
        {songlist.map((song, index) => (
          <tbody key={song.id}>
            <tr key={song.id}>
              <th scope="row">{index}</th>
              <td>{song.title}</td>
              <td>{song.releaseDate}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleAdding(song.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
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
