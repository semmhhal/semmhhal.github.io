import React, { useState } from "react";

const PureFooter = React.memo(function Footer() {
  console.log("Rendered Footer");
  return <p>I am a footer</p>;
});

export default function App3() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <PureFooter />
    </div>
  );
}
