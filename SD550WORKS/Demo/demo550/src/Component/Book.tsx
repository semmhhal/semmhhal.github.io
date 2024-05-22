import React, { useContext } from "react";
import { BookT } from "../types/bookType";
import { useNavigate } from "react-router-dom";
import booksServices from "../api/services/books.services";
import GlobalContext from "./Context";

interface DataProps {
  data: BookT;
}
export default function Book({ data }: DataProps) {
  const navigate = useNavigate();
  const { books, setBooks } = useContext(GlobalContext);
  const navigatetoUpdate = () => {
    navigate("/editbook", { state: data });
  };

  const ondelete = async () => {
    if (window.confirm("are you sure you want to delete?")) {
      try {
        const response = await booksServices.deletebook(data);

        if (response.status === 200) {
          const filtered = books.filter((item) => item.id !== data.id);
          setBooks([...filtered]);
        }
      } catch (error) {
        console.log("error");
      }
    }
  };
  return (
    <div>
      <ul>
        <h2>{data.title}</h2>
        <li>{data.summary}</li>
        <p>{data.isbn}</p>
        <button onClick={navigatetoUpdate}>Update Book</button>
        <button onClick={ondelete}>Delete Book</button>
      </ul>
    </div>
  );
}
