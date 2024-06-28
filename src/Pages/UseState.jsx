import React, { useState } from "react";

export default function UseState() {
  const [color, setColor] = useState("z");
  const [back, setBack] = useState("z");
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: back,
        color: color,
        height: "100vh",
      }}
    >
      <div>
        <h1>Lorem</h1>
        <button
          onClick={() => {
            setBack("black");
            setColor("white");
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            setBack("white");
            setColor("black");
          }}
        >
          Light
        </button>
        <br></br>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}
