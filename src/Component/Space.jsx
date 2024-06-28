import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Space1 from "./Images/Space1.jpg";
import Space2 from "./Images/Space2.jpg";
import Space3 from "./Images/Space3.jpg";
import Space4 from "./Images/Space4.jpg";
import Space5 from "./Images/Space5.jpg";

export default function Space() {
  return (
    <div>
      <style jsx>{`
        .spaceMain {
          width: 100%;
          background-image: linear-gradient(to right, #ac5fff 0%, #5b43b2 100%);
          height: 500px;
          padding: 10px;
          margin-top: 20px;
          border-radius: 0px 150px 0px 150px;
          color: white;
        }
        .spaceHead {
          height: 20px;
          text-align: left;
        }
        .spaceProd {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          align-items: stretch;
          gap: 20px;
          margin-top: 60px;
          margin-right: 30px;
        }
        .spaceMain .btn-outline-light-space {
          color: black !important;
          border-color: transparent !important;
          background-color: transparent !important;
        }

        .spaceMain .btn-outline-light-space:hover {
          color: black !important;
          background-color: coral !important;
          border-color: coral !important;
        }
        .spaceProd::-webkit-scrollbar {
          height: 5px;
        }

        /* Target the actual scrollable thumb */
        .spaceProd::-webkit-scrollbar-thumb {
          background-color: #555;
          border-radius: 10px;
        }

        .spaceProd::-webkit-scrollbar-track {
          background-color: #f1f1f1;
        }

        .spaceImgDiv {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 10px;
        }
        .spaceProdItem {
          flex: 0 0 auto;
          min-width: 250px;
          max-width: 350px;
        }
      `}</style>
      <div className="spaceMain">
        <div className="spaceHead">
          <h2>
            <b>Launch your imagination into the LEGO® universe</b>
          </h2>
        </div>
        <div className="spaceProd">
          <div className="spaceProdItem">
            <img src={Space1} className="spaceImgDiv"></img>
            <h4>
              <b>Zombienauts Set</b>
            </h4>
            <h6>Out of this world... and back from the grave!</h6>
            <br></br>
            <button
              type="button"
              class="btn btn-outline-light-space btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              Learn More
            </button>
          </div>
          <div className="spaceProdItem">
            <img src={Space2} className="spaceImgDiv"></img>
            <h4>
              <b>Cosmic Patrol Set</b>
            </h4>
            <h6>Blast off and defend the galaxy!</h6>
            <br></br>
            <button
              type="button"
              class="btn btn-outline-light-space btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              Learn More
            </button>
          </div>
          <div className="spaceProdItem">
            <img src={Space3} className="spaceImgDiv"></img>
            <h4>
              <b>Space Cowboys Set</b>
            </h4>
            <h6>Yee-haw in hyperspace!</h6>
            <br></br>
            <button
              type="button"
              class="btn btn-outline-light-space btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              Learn More
            </button>
          </div>
          <div className="spaceProdItem">
            <img src={Space4} className="spaceImgDiv"></img>
            <h4>
              <b>Expedition Set</b>
            </h4>
            <h6> Lost in space? Found in fun!</h6>
            <br></br>
            <button
              type="button"
              class="btn btn-outline-light-space btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              Learn More
            </button>
          </div>
          <div className="spaceProdItem">
            <img src={Space5} className="spaceImgDiv"></img>
            <h4>
              <b>Millenium Falcon Set</b>
            </h4>
            <h6>Build the fastest hunk of junk in the galaxy!</h6>
            <br></br>
            <button
              type="button"
              class="btn btn-outline-light-space btn-rounded"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
