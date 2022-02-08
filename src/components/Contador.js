import React, { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState("");

  // const sumar = () => {
  //   setValue(value + 1);
  // };

  const sumarC = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  // const restar = () => {
  //   setValue(value - 1);
  // };

  const restarC = useCallback(() => {
    setValue(value - 1);
  }, [value]);

  const HandleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumarC}>+</button>
        <button onClick={restarC}>-</button>
      </nav>
      <h3>{value}</h3>
      <input type="text" onChange={HandleInput} value={input} />
      <ContadorHijo contador={value} sumar={sumarC} restar={restarC} />
    </div>
  );
};

export default Contador;
