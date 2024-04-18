import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import News from "../pages/HomeNews";
import Messages from "../pages/HomeMessages";
import MessageDetail from "../pages/MessageDetail";
import NewsDetail from "../pages/NewsDetail";
export default [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />,
        children: [
          {
            path: "detail",
            element: <NewsDetail />,
          },
        ],
      },
      {
        path: "messages",
        element: <Messages />,
        children: [
          {
            path: "detail/:id/:title/:content",
            element: <MessageDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
