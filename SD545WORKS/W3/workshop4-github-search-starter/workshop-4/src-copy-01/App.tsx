import React, { useState } from "react";
import List from "./Components/List";
import Search from "./Components/Search";
import User from "./types/users";
import searchResponse from "./types/search-response";
import pubSub from "pubsub-js";
function App() {
  return (
    <div className="container">
      <Search />
      <List />
    </div>
  );
}

export default App;
