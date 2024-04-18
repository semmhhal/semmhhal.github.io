import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function News() {
  const [news, setNews] = useState([
    { id: 1, title: "breaking news", content: "no class on weekend(saturday)" },
    {
      id: 2,
      title: "shocking news",
      content: "chicken in An",
    },
    {
      id: 3,
      title: "surprising news",
      content: "blah",
    },
  ]);

  return (
    <div>
      <ul>
        {news.map(({ id, title, content }) => (
          <li>
            <Link to={`detail?id=${id}&title=${title}&content=${content}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
