import React, { useState } from 'react';

function SumTwoNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(null);

  const handleSum = () => {
    setSum(parseFloat(num1) + parseFloat(num2));
  };

  return (
    <div>
      <h1>Sum Two Numbers</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleSum}>Calculate Sum</button>
      {sum !== null && <h2>Sum: {sum}</h2>}
    </div>
  );
}

export default SumTwoNumbers;
