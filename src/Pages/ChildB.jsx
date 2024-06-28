import React from "react";

export default function ChildB({ book }) {
  return (
    <div>
      <style jsx>
        {`
          .BookImg {
            height: 600px;
            width: 350px;
          }
        `}
      </style>
      <div class="card" style={{ width: "350px" }}>
        <img src={book.img} class="card-img-top" className="BookImg" />
        <div class="card-body">
          <h5 class="card-title">{book.bname}</h5>
        </div>
        <ul class="list-group list-group-light list-group-small">
          <li class="list-group-item px-4">Sales: {book.sales}</li>
          <li class="list-group-item px-4">Stock: {book.stock}</li>
        </ul>
      </div>
    </div>
  );
}
