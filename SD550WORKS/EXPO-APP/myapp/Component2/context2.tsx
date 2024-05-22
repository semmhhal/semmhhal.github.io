import { createContext } from "react";
import IContact from "../types/Icontacts";

interface Icontext {
  contacts: IContact[];
  setContacts: (contacts: IContact[]) => void;
}

const GlobalContext = createContext({
  contacts: [],
  setContacts: () => {},
});

export default GlobalContext;
