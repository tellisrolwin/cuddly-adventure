import React from "react";
import ArtemisImg from "./Images/Artemis.jpg";
import RocketImg from "./Images/Rocket.jpg";
export default function Artemis() {
  return (
    <div>
      <style jsx>{`
        .mainDiv {
          background-color: #231338;
          width: 100%;
          height: 400px;
          border-radius: 25px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background-image: url(${RocketImg});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: 225px 50%;
        }
        .img {
          height: 180px;
        }
        .textDiv {
          margin-right: -10px;
          transform: translateX(0px);
          background-image: linear-gradient(to right, #970096 0%, #ff964f 100%);
          width: 700px;
          border-radius: 200px 0px 0px 200px;
        }
      `}</style>
      <div className="mainDiv">
        <div>
          <img src={ArtemisImg} className="img" align="left"></img>
        </div>
        <div className="textDiv">
          <p align="right">
            <h1>
              <strong>
                To the Moon <br></br>and Beyond 🚀
              </strong>
            </h1>
            <h6>
              One small step for a minifigure, <br></br>one giant leap for
              playtime!
              <br></br>
              Recreate the Artemis mission with LEGO.
            </h6>
          </p>
        </div>
      </div>
    </div>
  );
}
