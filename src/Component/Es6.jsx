import { colors } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Es6() {
  return (
    <div>
      <style jsx>
        {`
          .mainESDiv {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: teal;
            min-height: 100vh;
          }
          .ESDiv {
            background-color: lime;
            height: 300px;
            width: 350px;
            color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            border-radius: 50px;
            border: 2px solid red;
          }
          .ESDiv .btn-outline-light-prod {
            color: black !important;
            border-color: red !important;
            background-color: white !important;
          }

          .ESDiv .btn-outline-light-prod:hover {
            color: white !important;
            background-color: red !important;
            border-color: red !important;
          }
        `}
      </style>
      <div className="mainESDiv">
        <div className="ESDiv">
          <Link to="/arr">
            <button
              type="button"
              class="btn btn-outline-light-prod btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              ARROW
            </button>
          </Link>
          <Link to="/maps">
            {" "}
            <button
              type="button"
              class="btn btn-outline-light-prod btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              MAPS
            </button>
          </Link>
          <Link to="/ter">
            <button
              type="button"
              class="btn btn-outline-light-prod btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              TERNARY
            </button>
          </Link>
          <Link to="/tab">
            <button
              type="button"
              class="btn btn-outline-light-prod btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              TABLE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
