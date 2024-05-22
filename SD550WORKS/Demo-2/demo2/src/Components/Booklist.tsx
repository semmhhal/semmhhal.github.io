import React, { useContext } from "react";
import GlobalContext from "./context";
import Book from "./Book";
import Icontext from "./context";
import { BookTypes } from "../types/books.types";
import { useNavigate } from "react-router-dom";
export default function Booklist() {
    const navigate=useNavigate()
  const { books } = useContext(GlobalContext);



const navigatetoaddbook = ()=>{
navigate('/addbook')
}
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <h1>Book List</h1>
      {books.map((book: BookTypes) => (
        <Book key={book.id} data={book} />
      ))}
      <button onClick={navigatetoaddbook}>Add a book</button>
    </div>
  );
}
