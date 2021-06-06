import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [contador, setContador] = useState(0);
  useEffect(() => {}, [contador]);
  const handleOnClick = (operador) => {
    setContador(operador === '+' ? contador + 1 : contador - 1);
  };

  return (
    <div className="counter">
      <span>{contador}</span>
      <button onClick={() => handleOnClick('+')}>+</button>
      <button onClick={() => handleOnClick('-')}>-</button>
    </div>
  );
};

export default Counter;
