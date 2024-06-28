import React from "react";

export default function Spread() {
  const h = ["a", "b", "c", "z"];
  const g = ["d", "e", "f"];
  const s = [...h, ...g];
  const ob1 = {
    name: "jhon",
    age: 45,
    address: "mangalore",
  };
  const ob2 = {
    ...ob1,
    tel: 345267819,
  };
  return (
    <div>
      {s}
      {ob2.name}
    </div>
  );
}
