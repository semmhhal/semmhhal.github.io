import React, { useEffect, useState } from "react";
import ProductList from "./components/product-list";
import AddProduct from "./components/add-product";
import Product from "./types/products";
import axios from "axios";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  const addNewProd = (prod: Product) => {
    setProducts([...products, prod]);
  };

  return (
    <div className="container">
      <ProductList products={products} />
      <AddProduct onAddNewProd={addNewProd} />
    </div>
  );
}

export default App;
