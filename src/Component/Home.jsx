import React from "react";
import Header from "./Header";
import Footer1 from "./Footer1";
import Artemis from "./Artemis";
import SW from "./SW";
import Events from "./Events";
import Prod1 from "./Prod1";
import SetPoster from "./SetPoster";
import Space from "./Space";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import moment from "moment";

export default function Home() {
  return (
    <div>
      <div>
        <Header></Header>
        <br></br>
        <Artemis></Artemis>
        <br></br>
        <SW></SW>
        <br></br>
        <Events></Events>
        <br></br>
        <Prod1></Prod1>
        <br></br>
        <SetPoster></SetPoster>
        <br></br>
        <Space></Space>
        <br></br>
        <Footer1></Footer1>
      </div>
    </div>
  );
}
