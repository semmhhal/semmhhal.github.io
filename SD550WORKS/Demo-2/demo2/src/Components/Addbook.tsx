import React, { ChangeEvent, useContext, useState, MouseEvent } from "react";
import booksServices from "../api/services/books.services";
import GlobalContext from "./context";
import { useNavigate } from "react-router-dom";

export default function Addbook() {
  const navigate = useNavigate();
  const { books, setBooks } = useContext(GlobalContext);
  const [newBook, setNewbook] = useState({
    id: "",
    title: "",
    genre: "",
    isbn: "",
    format: "Paper",
    summary: "",
  });

  const addbook = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await booksServices.addBook(newBook);
      if (response.status === 200) {
        setBooks([...books, response.data]);
        navigate("/");
      }
    } catch (error) {
      console.log("error");
    }
  };
  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewbook({ ...newBook, [name]: value });
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
      <h1>Add a new Book</h1>
      <input
        placeholder="ID"
        name="id"
        value={newBook.id}
        onChange={onchange}
      />
      <input
        placeholder="Title"
        name="title"
        value={newBook.title}
        onChange={onchange}
      />
      <input
        placeholder="Genre"
        name="genre"
        value={newBook.genre}
        onChange={onchange}
      />
      <input
        placeholder="ISBN"
        name="isbn"
        value={newBook.isbn}
        onChange={onchange}
      />
      <input name="format" value={newBook.format} onChange={onchange} />
      <input
        placeholder="Summary"
        name="summary"
        value={newBook.summary}
        onChange={onchange}
      />
      <button onClick={addbook}>Add Book</button>
    </div>
  );
}
