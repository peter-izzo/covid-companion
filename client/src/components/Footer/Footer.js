import React from "react";
import "./footer.css/"
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer>
            <small class="f6 db tc">© 2021 <b class="ttu">COVID Companion</b>., All Rights Reserved</small>

            <ul className ="Horizontal-List">
                <li className="Horizontal-List-Item">
                    <Link to="../index.js/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Language
                    </Link>
                </li>

                <li className="Horizontal-List-Item">
                    <Link to="/" classname={location.pathname==="/" ? "nav-link active" : "nav-link"}>
                        Terms of Use 
                    </Link>
                </li>

                <li className="Horizontal-List-Item">
                    <Link to="/" classname={location.pathname==="/" ? "nav-link active" : "nav-link"}>
                        Privacy 
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;