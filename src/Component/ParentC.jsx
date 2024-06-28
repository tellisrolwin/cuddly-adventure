import React from "react";
import Props from "./Props";
export default function ParentC() {
  const book = [
    { id: "", bname: "", stock: "", sales: "", img: "" },
    { id: "", bname: "", stock: "", sales: "", img: "" },
  ];
  return (
    <div>
      <Props book1={book} />
    </div>
  );
}
