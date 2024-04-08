import React, { ChangeEvent, useState } from "react";

function Convert() {
  const [celsius, setCelsius] = useState<number | string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCelsius(e.currentTarget.value);
  };

  const letsConvert = () => {
    const fahrenheit = (9 / 5) * Number(celsius) + 32;
    setCelsius(fahrenheit);
  };

  return (
    <div>
      <input type="number" value={celsius} onChange={handleChange} />
      <button onClick={letsConvert}>Convert</button>
    </div>
  );
}

// prof solution

function TempConvertor() {
  const [celsius, setCelsius] = useState(0);
  const [fah, setFah] = useState(0);

  const changeTemp = (e: ChangeEvent<HTMLInputElement>) => {
    setCelsius(parseInt(e.target.value));
  };

  const convert = () => {
    setFah(9 / 5 + celsius + 32);
  };
  return (
    <>
      <input type="number" value={celsius} onChange={changeTemp} />
      =
      <input type="number" value={fah} onChange={} />
      <button onClick={convert}>convert to Fahrenheit</button>
      <div>converted Fahrenheit:{celsius}</div>
    </>
  );
}

function App() {
  return (
    <div>
      <TempConvertor />
    </div>
  );
}

export default Convert;
