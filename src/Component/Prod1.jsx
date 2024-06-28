import React from "react";
import LotrIMG from "./Images/LOTR.png";
import ConcordeIMG from "./Images/Concorde.png";
import DuneIMG from "./Images/Dune.png";
export default function Prod1() {
  return (
    <div>
      <style jsx>{`
        .prod1Div {
          width: 100%;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
        .prod1Div .btn-outline-light-prod {
          color: black !important;
          border-color: pink !important;
          background-color: white !important;
        }

        .prod1Div .btn-outline-light-prod:hover {
          color: white !important;
          background-color: pink !important;
          border-color: pink !important;
        }

        .prodImg {
          height: 165px;
          border-radius: 8px;
        }
      `}</style>
      <div className="prod1Div">
        <div>
          <img src={LotrIMG} className="prodImg"></img>
          <h3>
            <b>LOTR: Barad-dûr</b>
          </h3>
          <h6>
            <b>Build the power of Mordor, one brick at a time.</b>
          </h6>
          <button
            type="button"
            class="btn btn-outline-light-prod btn-rounded"
            data-mdb-ripple-init
            data-mdb-ripple-color="dark"
          >
            Learn More
          </button>
        </div>
        <div>
          <img src={DuneIMG} className="prodImg"></img>
          <h3>
            <b>Dune: Ornithopter</b>
          </h3>
          <h6>
            <b>From the sands of Arrakis to your display shelf.</b>
          </h6>
          <button
            type="button"
            class="btn btn-outline-light-prod btn-rounded"
            data-mdb-ripple-init
            data-mdb-ripple-color="dark"
          >
            Learn More
          </button>
        </div>
        <div>
          <img src={ConcordeIMG} className="prodImg"></img>
          <h3>
            <b>Icons: Concorde</b>
          </h3>
          <h6>
            <b>Experience supersonic speed, brick by brick.</b>
          </h6>
          <button
            type="button"
            class="btn btn-outline-light-prod btn-rounded"
            data-mdb-ripple-init
            data-mdb-ripple-color="dark"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
