import React, { ChangeEvent, useState, useContext } from "react";
import { BookT } from "../types/bookType";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalContext from "./Context";
import booksServices from "../api/services/books.services";

export default function Editbook() {
  const location = useLocation();
  const navigate = useNavigate();
  const [newbook, setNewbook] = useState<BookT>(location.state);
  const { books, setBooks } = useContext(GlobalContext);

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewbook({ ...newbook, [name]: value });
  };

  const updatebook = async () => {
    try {
      const response = await booksServices.editbook(location.state, newbook);
      if (response.status === 200) {
        console.log(response.data);
        const index = books.findIndex((item) => item.id === location.state.id);
        if (index !== -1) {
          books[index] = response.data;
        }
        setBooks([...books]);
        navigate("/home");
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Edit book</h3>

      <input
        name="id"
        placeholder="ID"
        value={newbook.id}
        onChange={onchange}
      />
      <input
        name="title"
        placeholder="Title"
        value={newbook.title}
        onChange={onchange}
      />
      <input
        name="genre"
        placeholder="Genre"
        value={newbook.genre}
        onChange={onchange}
      />
      <input
        name="isbn"
        placeholder="ISBN"
        value={newbook.isbn}
        onChange={onchange}
      />
      <input
        name="format"
        placeholder="Format"
        value={newbook.format}
        onChange={onchange}
      />
      <input
        name="summary"
        placeholder="Summary"
        value={newbook.summary}
        onChange={onchange}
      />
      <button onClick={updatebook}>Update</button>
    </div>
  );
}
