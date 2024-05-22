import { useState, useEffect } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");
  console.log("my component has rendered"); //first show

  useEffect(() => {
    console.log("mounted this component"); //second show
    return () => console.log("unmounted this componenet"); //fourth if unmounted but regardless
  }, []);

  const increase = () => {
    setCount(count + 1);
  };
  const changeMessage = () => {
    setMsg(msg + " " + 1);
  };
  useEffect(() => {
    console.log("count is changed 1"); //third show
    return () => console.log("count is changed 2"); //this one will show upon clicking increase
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <p>My Component</p>
      <p>{msg}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
}
