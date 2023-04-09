import React, { useState } from "react";
function InputSum() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [res, setRes] = useState("");
  function AddSum() {
    let sum = parseInt(num1, 10) + parseInt(num2, 10);
    setRes(sum);
  }
  return (
    <div>
      {/* <h1>sum:{res}</h1> */}
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      +<br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      =:
      <input
        type="number"
        value={res}
        onChange={(e) => setRes(e.target.value)}
      />
      <br />
      <button onClick={AddSum}>Add</button>
    </div>
  );
}
export default InputSum;
