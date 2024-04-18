import React from "react";
import sem from "./images/sem.jpeg";
import ProductList from "./Product/product-list.page";
import AddProduct from "./Product/add-product.page";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div className="container">
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={sem} alt="Maharishi Logo" style={{ width: "100px" }} />
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink
                  to="/products"
                  className="nav-link px-2 text-secondary"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/add" className="nav-link px-2 text-secondary">
                  Add
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/" element={<Navigate to="/products" />}></Route>
      </Routes>
    </div>
  );
}
