import React from "react";

export default function Maps() {
  const ar = [10, 20, 30, 40];
  const ar1 = ["apple", "orange", "grapes", "mango"];
  const data = [
    { name: "ragav", age: 34 },
    { name: "tara", age: 54 },
    { name: "rolwin", age: 14 },
  ];
  return (
    <div>
      {ar.map((item, index) => {
        return <h1>{item}</h1>;
      })}
      {ar1.map((i, index) => {
        return <h1>{i}</h1>;
      })}
      {data.map((i, index) => {
        return (
          <>
            <h1>
              {i.name}
              {i.age}
            </h1>
          </>
        );
      })}
    </div>
  );
}
