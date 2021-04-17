// creates status bars depending on user input
import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHeadSideVirus,
  faHeadSideMask,
  faCalendarDay,
  faClipboardCheck,
  faVial,
  faLungs,
  faHeartbeat,
  faWeight,
  faViruses,
  faChartLine,
  faThumbsUp,
  faBiohazard,
  faAllergies,
} from "@fortawesome/free-solid-svg-icons";

const element = (
  <FontAwesomeIcon icon={faHeadSideVirus} className="f4 dib ml3" />
);
const element2 = (
  <FontAwesomeIcon icon={faCalendarDay} className="f4 dib ml3" />
);
const element3 = (
  <FontAwesomeIcon icon={faClipboardCheck} className="f4 dib ml3" />
);
const element4 = (
  <FontAwesomeIcon icon={faHeadSideMask} className="f4 dib ml3" />
);
const element5 = <FontAwesomeIcon icon={faVial} className="f4 dib ml3" />;
const element6 = <FontAwesomeIcon icon={faLungs} className="f4 dib ml3" />;
const element7 = <FontAwesomeIcon icon={faHeartbeat} className="f4 dib ml3" />;
const element8 = <FontAwesomeIcon icon={faWeight} className="f4 dib ml3" />;
const element9 = <FontAwesomeIcon icon={faViruses} className="f4 dib ml3" />;
const element10 = <FontAwesomeIcon icon={faChartLine} className="f4 dib ml3" />;
const element11 = <FontAwesomeIcon icon={faThumbsUp} className="f4 dib ml3" />;
const element12 = <FontAwesomeIcon icon={faBiohazard} className="f4 dib ml3" />;

// import { questions } from "../components/questions.js";

function CovidInfo({ user }) {
  // function colorCoordinate() {
  //   const covidStatus = document.getElementById("covidStatus");
  //   if (user.covidStatus === "Positive (+)") {
  //     covidStatus.addClass("positive");
  //   console.log("positive" + ".positive");
  // }

  return (
    <div className="CovidChart">
      <ul className="list pl0 ml0 center mw5 ba b--light-silver br3 fw5 tc">
        <li id="covidStatus" className="ph3 pv2 bb b--light-silver positive">
          {element} Positive (+) {user?.covidStatus}
        </li>
        <li hidden className="ph3 pv2 bb b--light-silver bg-green negative">
          {element4} Negative (-)
        </li>
        {/* @todo hidden condition to display based on answers */}

        <li className="ph3 pv2 bb b--light-silver inQuarantine">
          {element2} Quarantined (Day# {user?.quarantineDay}/10)
        </li>

        <li className="ph3 pv2 bb b--light-silver tested">
          {element3} Tested {user?.testDate}(mm/dd/yyyy)
        </li>

        <li hidden className="ph3 pv2 bb b--light-silver vaccinated ">
          {element5} Vaccinated (P/M/JJ)
        </li>

        <li hidden className="ph3 pv2 bb b--light-silver riskLevel-0">
          {element11} Risk Level (0): None
        </li>
        <li hidden className="ph3 pv2 bb b--light-silver  riskLevel-1">
          {element10} Risk Level (1): Low
        </li>
        <li className="ph3 pv2 bb b--light-silver  riskLevel-2">
          {element6} Risk Level (2): Some
        </li>
        <li hidden className="ph3 pv2 bb b--light-silver  riskLevel-3">
          {element9} Risk Level (3): Medium
        </li>
        <li hidden className="ph3 pv2 bb b--light-silver  riskLevel-4">
          {element8} Risk Level (4): High
        </li>
        <li hidden className="ph3 pv2 bb b--light-silver  riskLevel-5">
          {element7} Risk Level (5): Very High
        </li>
        <li hidden className="ph3 pv2 bb b--light-silver  riskLevel-6">
          {element12} Risk Level (6): Highest
        </li>
      </ul>
      {/* <ul className="list pl0">
        <li className="pa3 pa4-ns bb b--black-10">
          <b className="db f5 mb1">Health Conditions</b>
          <span className="f6 db center lh-copy measure">
            Asthma, High-Blood-Pressure.
          </span>
        </li>
      </ul> */}
    </div>
  );
}
export default CovidInfo;
