import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const location = useLocation();
  return (
    <footer className="pb5 ml3 mr3" style={{ paddingBottom: "115px" }}>
      <small className="f6 db tc">
        © 2021 <b className="ttu">COVID Companion</b>., All Rights Reserved
      </small>

      <ul className="Horizontal-List">
        <li className="Horizontal-List-Item">
          <Link
            to="../index.js/"
            className={
              (location.pathname === "/" ? "nav-link active" : "nav-link", "f7")
            }
          >
            Language
          </Link>
        </li>

        <li className="Horizontal-List-Item">
          <Link
            to="/"
            className={
              (location.pathname === "/" ? "nav-link active" : "nav-link", "f7")
            }
          >
            Terms of Use
          </Link>
        </li>

        <li className="Horizontal-List-Item">
          <Link
            to="/"
            className={
              (location.pathname === "/" ? "nav-link active" : "nav-link", "f7")
            }
          >
            Privacy
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
