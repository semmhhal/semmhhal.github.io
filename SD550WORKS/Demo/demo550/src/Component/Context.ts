import { createContext } from "react";
import { BookT } from "../types/bookType";

interface IContext {
  books: BookT[];
  setBooks: (books: BookT[]) => void;
}
const GlobalContext = createContext<IContext>({
  books: [],
  setBooks: () => {},
});

export default GlobalContext;
