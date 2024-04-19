import React from "react";

export default function GenSongList() {
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
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
