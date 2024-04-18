import Product from "../../types/product.types";
import http from "../axios";

const getAll = () => {
  return http.get("/products");
};
const deleteProductById = (id: number) => {
  return http.delete(`/products/${id}`);
};

const SAVEpROD = (data: Product) => {
  return http.post("/products", data);
};
export default {
  getAll,
  deleteProductById,
  SAVEpROD,
};
