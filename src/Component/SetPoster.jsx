import React from "react";
import IMG1 from "./Images/City1.png";
import IMG2 from "./Images/City2.png";
import IMG3 from "./Images/City3.png";

export default function SetPoster() {
  return (
    <div>
      <style jsx>{`
        .setDiv {
          width: 100%;
          background-color: skyblue;
          color: black;
          height: 300px;
          background-image: linear-gradient(to right, lime 0%, cyan 100%);
          border-radius: 100px 0px 100px 0px;
        }
        .setInnerDiv {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .setImg1 {
          height: 250px;
          margin-top: 20px;
          transform: translateX(-80px);
        }
        .setImg3 {
          height: 400px;
          transform: rotate(-45deg) translateY(100px) translateX(100px);
        }
        .setTextDiv {
          transform: translateY(-40px) translateX(20px);
        }
        .setDiv .btn-outline-light-set {
          color: white !important;
          border-color: black !important;
          background-color: black !important;
        }

        .setDiv .btn-outline-light-set:hover {
          color: black !important;
          background-color: white !important;
          border-color: white !important;
        }
      `}</style>
      <div className="setDiv">
        <div className="setInnerDiv">
          <div>
            <img src={IMG1} className="setImg1"></img>
          </div>
          <div className="setTextDiv">
            <h5>
              <b>Discover amazing new sets from the world of LEGO® City</b>
            </h5>
            <button
              type="button"
              class="btn btn-outline-light-set btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              Learn More
            </button>
          </div>
          <div>
            <img src={IMG3} className="setImg3"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
