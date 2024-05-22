import { useState, useContext, createContext } from "react";

const GlobalContext = createContext<any>(null);

function Component1() {
  const { state } = useContext<any>(GlobalContext);
  return (
    <div>
      <h2>Component1</h2>
      <p>{state.message}</p>
    </div>
  );
}

function Component2() {
  const { state, setState } = useContext<any>(GlobalContext);
  return (
    <div>
      <h2>Component2</h2>
      <p>{state.message}</p>
    </div>
  );
}

function App2() {
  const [state, setState] = useState({ message: "Hello" });
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <div>
        <Component1 />
        <Component2 />
      </div>
    </GlobalContext.Provider>
  );
}
export default App2;
