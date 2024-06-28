import React from "react";
import Header from "./Header";
import Footer1 from "./Footer1";
import RadioIMG from "./Images/Radio.jpg";
import BennyIMG from "./Images/Benny.png";
import "../App.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <style jsx>{`
        .abtMainDiv {
          width: 100%;
          color: black;
          margin-top: 10px;
          margin-bottom: 10px;
          height: 450px;
          border-radius: 0px 250px 0px 250px;
          display: flex;
          align-items: center;
          position: relative;
          background-image: linear-gradient(to right, coral 0%, magenta 100%);
        }
        .abtImg1 {
          height: 350px;
          transform: rotate(60deg);
          position: absolute;
          top: 20px;
          left: -20px;
        }
        .abtImg2 {
          height: 400px;
          position: absolute;
          bottom: 50px;
          right: 0px;
        }
        .abtTextDiv {
          padding: 20%;
          text-align: center;
          z-index: 1;
        }
      `}</style>

      <Header></Header>
      <div className="abtMainDiv">
        <div>
          <img src={RadioIMG} className="abtImg1"></img>
        </div>
        <div className="abtTextDiv">
          <h1>
            <strong>
              <u>ABOUT US</u>
            </strong>
          </h1>
          <h4>
            <p align="left">
              At the LEGO Group, we believe in the power of play to spark
              creativity, inspire imagination, and build a better world. Since
              1932, we've been crafting colorful bricks that empower builders of
              all ages to create anything they can dream up. Our mission is
              simple: to inspire and develop the builders of tomorrow.
            </p>
            <br></br>
            <p align="right">
              From our iconic minifigures to our sprawling LEGO cities, every
              product we create is designed to unleash the joy of building and
              the endless possibilities of the imagination. We're more than just
              toys – we're a universe of creativity, a community of builders,
              and a celebration of play.
            </p>
          </h4>
        </div>
        <div>
          <img src={BennyIMG} className="abtImg2"></img>
        </div>
      </div>
      <Footer1></Footer1>
    </div>
  );
}
