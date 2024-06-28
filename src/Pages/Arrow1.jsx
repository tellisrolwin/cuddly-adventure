import React from "react";

export default function Arrow1() {
  const a = 10;
  const s = "abc";
  function Arrow() {
    return <h1>hello</h1>;
  }
  const AddNumber = (a, b) => a + b;
  const hello = () => {
    return (
      <>
        <h1>hello</h1>
        <p>hello</p>
      </>
    );
  };
  return (
    <div>
      <div>
        {a}
        {s}
        <Arrow></Arrow>
        {AddNumber(2, 6)}
        {hello()}
      </div>
    </div>
  );
}
