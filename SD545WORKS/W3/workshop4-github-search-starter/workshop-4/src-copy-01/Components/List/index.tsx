import "./index.css";
import User from "../../types/users";
import searchResponse from "../../types/search-response";
import React, { useState, useEffect } from "react";

// type Props = {
//   searchResponse: searchResponse;
// };
export default function List() {
  const [searchResponse, setSearchResponse] = useState<searchResponse>({
    isFirst: true,
    isLoading: false,
    isError: false,
    users: [],
  });

  const { isFirst, isLoading, isError, users } = searchResponse;
  useEffect(() => {
    const token = PubSub.subscribe("sd545", (msg, data) => {
      console.log(msg);
      setSearchResponse(data);
    });
    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);
  return (
    <div>
      {isFirst ? (
        <h2>Please enter keyword to Start</h2>
      ) : isLoading ? (
        <h2>Please Wait</h2>
      ) : isError ? (
        <h2>Whoops! try Later</h2>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank">
                <img src={user.avatar_url} style={{ width: "100px" }} />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
