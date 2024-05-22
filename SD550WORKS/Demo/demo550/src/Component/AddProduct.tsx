import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const location = useLocation();

  const goback = () => {
    navigate("/");
  };
  return (
    <div>
      Add Product
      <button onClick={goback}>Go to home</button>
      <p>{location.state.name}</p>
    </div>
  );
}
