import React from "react";
import Header from "./Header";
import Footer1 from "./Footer1";
import EmmetSmile from "./Images/EmmetSmile.png";

export default function Contact() {
  return (
    <div>
      <style jsx>{`
        .conMainDiv {
          width: 100%;
          position: relative;
          width: 100%;
          color: black;
          margin-top: 10px;
          margin-bottom: 10px;
          height: 550px;
          border-radius: 0px 250px 250px 0px;
          display: flex;
          align-items: center;
          background-image: linear-gradient(to left, #fcb0f3 0%, #3d05dd 100%);
        }
        .conImg1 {
          height: 350px;
          position: absolute;
          top: 50px;
          left: -0px;
          transform: rotate(90deg);
        }
        .conText {
          text-align: center;
          padding: 15%;
          z-index: 1;
          position: absolute;
          left: 650px;
        }
        .conDub {
          display: flex;
          gap: 300px;
          width: 100%;
        }
      `}</style>
      <div>
        <Header></Header>
        <div className="conMainDiv">
          <div>
            <img className="conImg1" src={EmmetSmile}></img>
          </div>
          <div className="conText">
            <h1>
              <b>
                <u>Get in Touch with Us!</u>
              </b>
            </h1>
            <p>
              <h3>
                We'd love to hear from you. Whether you have a question,
                feedback, or just want to share your latest LEGO creation, we're
                here to listen.
              </h3>
              <br></br>
            </p>
            <div className="conDub">
              <div>
                <h5 align="right">
                  <u>
                    <b>Customer Service</b>
                  </u>
                  <ul type="none">
                    <li>Phone</li>
                    <li>Email</li>
                    <li>Live Chat</li>
                  </ul>
                </h5>
              </div>
              <div>
                <h5 align="right">
                  <u>
                    <b>Other Service</b>
                  </u>
                  <ul type="none">
                    <li>FAQ</li>
                    <li>Product Support</li>
                    <li>Store Locater</li>
                  </ul>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Footer1></Footer1>
      </div>
    </div>
  );
}
