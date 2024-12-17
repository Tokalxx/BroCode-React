import React, { useState } from "react";

function Update_Function() {
  const [count, setCount] = React.useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <>
      <div>
        <p>{count}</p>
        <br />
        <button onClick={increaseCount}>Increase</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </>
  );
}

export default Update_Function;
