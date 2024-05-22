import http from "../axios";
import { BookT } from "../../types/bookType";

const getBook = () => {
  return http.get("/books");
};
const addbook = (data: BookT) => {
  return http.post("/books", data);
};

const editbook = (book: BookT, data: BookT) => {
  return http.put(`/books/${book.id}`, data);
};

const deletebook = (book: BookT) => {
  return http.put(`/books/${book.id}`);
};
export default {
  getBook,
  addbook,
  editbook,
  deletebook,
};
