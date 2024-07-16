import React, { useState } from 'react';

const Input = () => {
  const [size, setSize] = useState(50);

  const adjust = (event) => {
    setSize((prev) => (prev = event.target.value));
  };

  return (
    <>
      <input onChange={adjust} type='range' />
      <p style={{ fontSize: `${size}px` }}>adjust text</p>
    </>
  );
};

export default Input;
