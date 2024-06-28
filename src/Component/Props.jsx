import React from "react";

export default function Props(props) {
  return (
    <div>
      <div>
        {/* name: {props.name1} */}
        <br></br>
        Name: {props.item1.name}
        <br></br>
        Age: {props.item1.age}
        <br></br>
        Email: {props.item1.email}
      </div>
    </div>
  );
}
