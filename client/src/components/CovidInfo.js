// creates status bars depending on user input
import React from "react";
import "../index.css"

function CovidInfo() {
  return (
    <div className="CovidChart">
      <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
        <li className="ph3 pv2 bb b--light-silver bg-red">Positive (+)</li>
        <li className="ph3 pv2 bb b--light-silver bg-blue">
          Quarantined (Day #/10)
        </li>
        <li className="ph3 pv2 bb b--light-silver bg-yellow">
          Last Tested (mm/dd/yyyy)
        </li>

        <li className="ph3 pv2 bb b--light-silver bg-green">
          Vaccinated (P/M/JJ)
        </li>
        <li className="ph3 pv2 bb b--light-silver bg-orange">
          Risk Level (0-10)
        </li>
      </ul>
      <ul className="list pl0">
        <li className="pa3 pa4-ns bb b--black-10">
          <b className="db f5 mb1">Health Conditions</b>
          <span className="f6 db center lh-copy measure">
            Asthma, High-Blood-Pressure.
          </span>
        </li>
      </ul>
    </div>
  );
}
export default CovidInfo;
