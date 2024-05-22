import React, { useContext, useState, MouseEvent, ChangeEvent } from "react";
import GlobalContext from "./Context";
import booksServices from "../api/services/books.services";
import { useNavigate } from "react-router-dom";

export default function Addbook() {
  const navigate = useNavigate();
  const { books, setBooks } = useContext(GlobalContext);
  const [book, setBook] = useState({
    id: 0,
    title: "",
    genre: "",
    isbn: "",
    format: "paper",
    summary: "",
  });

  const addbook = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await booksServices.addbook(book);
      if (response.status === 201) {
        setBooks([...books, response.data]);
        navigate("/");
      }
    } catch (error) {
      console.log("error");
    }
  };
  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
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
      <h3>Add a New Book</h3>
      <input name="id" placeholder="ID" value={book.id} onChange={onchange} />
      <input
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={onchange}
      />
      <input
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={onchange}
      />
      <input
        name="isbn"
        placeholder="ISBN"
        value={book.isbn}
        onChange={onchange}
      />
      <input
        name="format"
        placeholder="Format"
        value={book.format}
        onChange={onchange}
      />
      <input
        name="summary"
        placeholder="Summary"
        value={book.summary}
        onChange={onchange}
      />
      <button onClick={addbook}>Add</button>
    </div>
  );
}
