import React from "react";
import EmmetImg from "./Images/Emmet.png";
export default function Events() {
  return (
    <div>
      <style jsx>{`
        .eventDiv {
          background-image: linear-gradient(to right, coral 0%, pink 100%);
          width: 100%;
          height: 400px;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 200px 0px 0px 200px;
        }
        .eventEmmetImg {
          height: 400px;
        }
        .eventTextDiv {
          margin-right: auto;
          padding-left: 60px;
        }
        .btn-outline-light {
          color: white !important;
          border-color: black !important;
          background-color: black !important;
        }

        .btn-outline-light:hover {
          color: black !important;
          border-color: white !important;
          background-color: white !important;
        }
      `}</style>
      <div className="eventDiv">
        <div className="eventTextDiv">
          <p>
            <h1>
              <b>New Product Drop Soon!</b>
            </h1>
            <h5>Stay updated with latest LEGO® releases!</h5>
            <button
              type="button"
              class="btn btn-outline-light btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              Learn More
            </button>
          </p>
        </div>
        <div>
          <img src={EmmetImg} className="eventEmmetImg"></img>
        </div>
      </div>
    </div>
  );
}
