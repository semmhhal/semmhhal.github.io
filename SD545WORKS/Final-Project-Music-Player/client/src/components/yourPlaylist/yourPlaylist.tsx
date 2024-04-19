import React from "react";

export default function YourPlaylist() {
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
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
