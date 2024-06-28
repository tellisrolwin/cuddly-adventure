import * as React from "react";
import legologo from "./Images/LEGO.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "rgb(250,250,0)",
          zIndex: "5",
          borderRadius: "0px 0px 25px 25px",
        }}
      >
        <div class="container-fluid">
          <Link to="/">
            <img src={legologo} height={"60px"}></img>
          </Link>
          <button
            data-mdb-collapse-init
            class="navbar-toggler"
            type="button"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  <strong>ABOUT</strong>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  <strong>CONTACT</strong>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/es6">
                  <strong>ES6</strong>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/parentb">
                  <strong>Props</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
