import React from "react";
import VaderImg from "./Images/Vader.png";
import JabbaImg from "./Images/Jabba.png";
import MilleniumImg from "./Images/Millenium.png";
import WalkerImg from "./Images/Walker.png";
import LightImg from "./Images/Lightsaber.png";
export default function SW() {
  return (
    <div>
      <style jsx>{`
        .mainSWDiv {
          width: 100%;
          height: 300px;
          border-radius: 25px;
          color: black;
        }
        .swHeadDiv {
          padding-top: 15px;
        }
        .swSup {
          font-size: 15px;
        }
        .swTab {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
        }
        .swImg {
          height: 150px;
        }
        .swImgDiv {
          margin-top: 20px;
          font-style: italic;
          height: 150px;
        }
      `}</style>
      <div className="mainSWDiv">
        <div className="swHeadDiv">
          <h1>
            <b>
              Celebrating NASA x SpaceX Missions with Star Wars
              <sup className="swSup">TM</sup>!
            </b>
          </h1>
          <h3>May the bricks be with you... all the way to the moon!</h3>

          <div className="swTab">
            <div
              className="swImgDiv"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, white 25%, red 75%)",
              }}
            >
              <img src={VaderImg} className="swImg"></img>
              <h6>
                <b>Minifigures</b>
              </h6>
            </div>
            <div
              className="swImgDiv"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, white 25%, green 75%)",
              }}
            >
              <img src={JabbaImg} className="swImg"></img>
              <h6>
                <b>Big Figures</b>
              </h6>
            </div>
            <div
              className="swImgDiv"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, white 25%, teal 75%)",
              }}
            >
              <img src={MilleniumImg} className="swImg"></img>
              <h6>
                <b>Spaceships</b>
              </h6>
            </div>
            <div
              className="swImgDiv"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, white 25%, coral 75%)",
              }}
            >
              <img src={WalkerImg} className="swImg"></img>
              <h6>
                <b>Themed Sets</b>
              </h6>
            </div>
            <div
              className="swImgDiv"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, white 25%, lightpink 75%)",
              }}
            >
              <img src={LightImg} className="swImg"></img>
              <h6>
                <b>Accessories</b>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
