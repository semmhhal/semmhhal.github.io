import LogIn from "../MusicPages/logIn";
import Homepage from "../MusicPages/home";
import { Navigate } from "react-router-dom";
export default [
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
];
