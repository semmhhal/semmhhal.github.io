import React, { useState } from "react";
import List from "./Components/List";
import Search from "./Components/Search";
import User from "./types/users";
function App() {
  const [searchResponse, setSearchResponse] = useState<User[]>([]);

  return (
    <div className="container">
      <Search onSetSearchResponse={setSearchResponse} />
      <List searchResponse={searchResponse} />
    </div>
  );
}

export default App;
