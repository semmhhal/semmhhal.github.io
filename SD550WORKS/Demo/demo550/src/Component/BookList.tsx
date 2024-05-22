import React, { useContext } from "react";
import { useNavigate, Link, useOutlet } from "react-router-dom";
import GlobalContext from "./Context";
import Book from "./Book";

export default function BookList() {
  const navigate = useNavigate();
  const { books } = useContext(GlobalContext);

  //   const outlet = useOutlet();

  //   const navigatetoadd = () => {
  //     navigate("/addProduct", { state: { name: "Thao" } });
  //   };
  //   const tochild2 = () => {
  //     navigate("/child2");
  //   };
  //   const navigatetoedit = () => {
  //     navigate("editproduct/3?name=Thao");
  //   };

  const navigatetoAdd = () => {
    navigate("/addbook");
  };

  // const navigatetoUpdate = () => {
  //   navigate("/editbook",{{state:}});
  // };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>List of Books</h1>
      {/* <button onClick={navigatetoadd}>Add Product</button>
      <hr />
      <Link to="/addProduct">Add Product</Link>
      <br />

      <Link to="/child">Child </Link>
      <br />
      <button onClick={tochild2}>Child2</button> */}
      {/* {outlet} */}
      {/* <button onClick={navigatetoedit}>Edit Product</button> */}
      {books.map((book) => (
        <Book key={book.id} data={book} />
      ))}
      <button onClick={navigatetoAdd}>Add Book</button>
    </div>
  );
}
