import { createContext } from "react";
import ICourse from "../types/Icourses";

interface Icontext {
  courses: ICourse[];
  setCourses: (courses: ICourse[]) => void;
  setLoggedin: (loggedin: boolean) => void;
}

const GlobalContext = createContext<Icontext>({
  courses: [],
  setCourses: () => {},
  setLoggedin: () => {},
});

export default GlobalContext;
