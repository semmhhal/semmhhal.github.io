import React, {
  useRef,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import { BookTypes } from "./types/books.types";
import booksServices from "./api/services/books.services";
import GlobalContext from "./Components/context";
import Booklist from "./Components/Booklist";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
function App() {
  const element = useRoutes(routes);
  const [books, setBooks] = useState<BookTypes[]>([]);

  const loadBooks = async () => {
    try {
      const response = await booksServices.getBooks();
      if (response.status === 200) {
        console.log(response.data);
        setBooks([...books, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <GlobalContext.Provider value={{ books, setBooks }}>
      <div>{element}</div>
    </GlobalContext.Provider>
  );
}

export default App;
