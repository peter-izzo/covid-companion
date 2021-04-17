// creates status bars depending on user input
import React from "react";
import "../index.css";
// import { questions } from "../components/questions.js";

function CovidInfo({ user }) {
  // function colorCoordinate() {
  //   const covidStatus = document.getElementById("covidStatus");
  //   if (user.covidStatus === "Positive (+)") {
  //     covidStatus.addClass("positive");
  //   console.log("positive" + ".positive");
  // }

  return (
    <div className="CovidChart" key = {user?.userId}>
      <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
        <li id="covidStatus" className="ph3 pv2 bb b--light-silver bg-red">
          Positive (+)
        </li>
        <li className="ph3 pv2 bb b--light-silver bg-blue">
          Quarantined (Day {user?.quarantineDay}/14)
        </li>
        <li className="ph3 pv2 bb b--light-silver bg-yellow">
          Last Tested {user?.testDate}
        </li>

        <li className="ph3 pv2 bb b--light-silver bg-green">
          Vaccinated {user?.vaccinated}
        </li>
        <li className="ph3 pv2 bb b--light-silver bg-orange">
          Risk Level {user?.riskLevel}
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
