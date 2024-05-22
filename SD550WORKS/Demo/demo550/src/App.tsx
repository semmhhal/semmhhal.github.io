import React, { useState, useEffect } from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { BookT } from "./types/bookType";
import GlobalContext from "./Component/Context";
import booksServices from "./api/services/books.services";

export default function App() {
  const [books, setBooks] = useState<BookT[]>([]);

  const element = useRoutes(routes);

  const loadbook = async () => {
    try {
      const response = await booksServices.getBook();
      if (response.status === 200) {
        setBooks(response.data);
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    loadbook();
  }, []);

  return (
    <GlobalContext.Provider value={{ books, setBooks }}>
      <div>{element}</div>
    </GlobalContext.Provider>
  );
}
