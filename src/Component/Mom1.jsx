import React from "react";
import moment from "moment";

export default function Mom1() {
  const x = moment("12-25-1995", "MM-DD-YYYY");
  return (
    <div>
      <h1>{x.format("MMM D, Y (ddd)")}</h1>
    </div>
  );
}
