import http from "../axios";
import { BookTypes, AuthorTypes } from "../../types/books.types";

const getBooks = () => {
  return http.get("/Book");
};
const addBook = (data: BookTypes) => {
  return http.post("/Book", data);
};
export default {
  getBooks,
  addBook,
};
