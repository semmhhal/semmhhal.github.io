import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}
//react version 18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

//react before 18
//React.render(<App/>)
