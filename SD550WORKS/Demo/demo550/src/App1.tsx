import { useEffect, useRef, useState } from "react";
import MyComponent from "./Mycomponent";

function App1() {
  const [showhide, setShowhide] = useState(true);
  const [text, setText] = useState("");
  const textRef = useRef<HTMLParagraphElement>(null);
  const onShowhide = () => {
    setShowhide(!showhide);
  };
  const changeText = () => {
    if (textRef.current) textRef.current.innerHTML = "Hello World";
  };
  return (
    <div className="App" style={{ display: "flex", textAlign: "center" }}>
      {/* {showhide && <MyComponent />}
      <button onClick={onShowhide}>Show/hide</button> */}
      <p ref={textRef}>{text}</p>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
}

export default App1;
