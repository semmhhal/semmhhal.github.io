import { createContext } from "react";
import { BookTypes } from "../types/books.types";

interface Icontext {
  books: BookTypes[];
  setBooks: (books: BookTypes[]) => void;
}

const GlobalContext = createContext<Icontext>({
  books: [],
  setBooks: () => {},
});
export default GlobalContext;
