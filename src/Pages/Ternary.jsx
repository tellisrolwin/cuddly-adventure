import React from "react";
export default function Ternary() {
  let val1 = "right";
  let val2 = "left";
  const click = (val) => {
    {
      val == "right"
        ? alert("you have clicked the left button")
        : alert("you have clicked the right button");
    }
  };
  return (
    <div>
      <button onClick={() => click(val1)}>left</button>
      <button onClick={() => click(val2)}>right</button>
    </div>
  );
}
