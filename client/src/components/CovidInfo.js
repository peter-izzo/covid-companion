import React from "react";
import "../index.css";

// Importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadSideVirus,
  faHeadSideMask,
  faCalendarDay,
  faClipboardCheck,
  faSyringe,
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
const element5 = <FontAwesomeIcon icon={faSyringe} className="f4 dib ml3" />;
const element6 = <FontAwesomeIcon icon={faLungs} className="f4 dib ml3" />;
const element7 = <FontAwesomeIcon icon={faHeartbeat} className="f4 dib ml3" />;
const element8 = <FontAwesomeIcon icon={faWeight} className="f4 dib ml3" />;
const element9 = <FontAwesomeIcon icon={faViruses} className="f4 dib ml3" />;
const element10 = <FontAwesomeIcon icon={faChartLine} className="f4 dib ml3" />;
const element11 = <FontAwesomeIcon icon={faThumbsUp} className="f4 dib ml3" />;
const element12 = <FontAwesomeIcon icon={faBiohazard} className="f4 dib ml3" />;

function CovidInfo({ user }) {
  return (
    <div className="CovidChart">
      <ul className="list pl0 ml0 center mw5 ba b--light-silver br3 fw5 tc">
        <li
          hidden={user?.covidStatus === "Negative (-)"}
          id="covidStatus"
          className="ph3 pv2 bb b--light-silver positive"
        >
          {element} {user?.covidStatus}
        </li>
        <li
          hidden={user?.covidStatus === "Positive (+)"}
          className="ph3 pv2 bb b--light-silver bg-green negative"
        >
          {element4} {user?.covidStatus}
        </li>
        <li
          hidden={user?.inQuarantine === "No"}
          className="ph3 pv2 bb b--light-silver inQuarantine"
        >
          {element2} Quarantined Day ({user?.quarantineDay}/14)
        </li>
        <li
          hidden={user?.tested === "No"}
          className="ph3 pv2 bb b--light-silver tested"
        >
          {element3} Tested {user?.testDate}(mm/dd/yyyy)
        </li>{" "}
        {/*@todo moment for date format */}
        <li
          hidden={user?.vaccinated === "No"}
          className="ph3 pv2 bb b--light-silver vaccinated "
        >
          {element5} Vaccinated ({user?.vaccineCo})
        </li>
        <li
          hidden={
            (user?.riskLevel === "Age 60+",
            "Chronic respiratory diseases",
            "Immunocompromised condition",
            "Diabetes",
            "Cardiovascular diseases",
            "Chronic renal disease")
          }
          className="ph3 pv2 bb b--light-silver riskLevel-0"
        >
          {element11} Risk Level (0): None
        </li>
        <li
          hidden={
            (user?.riskLevel === "No preexising conditions",
            "Chronic respiratory diseases",
            "Immunocompromised condition",
            "Diabetes",
            "Cardiovascular diseases",
            "Chronic renal disease")
          }
          className="ph3 pv2 bb b--light-silver  riskLevel-1"
        >
          {element10} Risk Level (1): Low
        </li>
        <li
          hidden={
            (user?.riskLevel === "No preexising conditions",
            "Age 60+",
            "Immunocompromised condition",
            "Diabetes",
            "Cardiovascular diseases",
            "Chronic renal disease")
          }
          className="ph3 pv2 bb b--light-silver  riskLevel-2"
        >
          {element6} Risk Level (2): Some
        </li>
        <li
          hidden={
            (user?.riskLevel === "No preexising conditions",
            "Age 60+",
            "Chronic respiratory diseases",
            "Diabetes",
            "Cardiovascular diseases",
            "Chronic renal disease")
          }
          className="ph3 pv2 bb b--light-silver  riskLevel-3"
        >
          {element9} Risk Level (3): Medium
        </li>
        <li
          hidden={
            (user?.riskLevel === "No preexising conditions",
            "Age 60+",
            "Chronic respiratory diseases",
            "Immunocompromised condition",
            "Cardiovascular diseases",
            "Chronic renal disease")
          }
          className="ph3 pv2 bb b--light-silver  riskLevel-4"
        >
          {element8} Risk Level (4): High
        </li>
        <li
          hidden={
            (user?.riskLevel === "No preexising conditions",
            "Age 60+",
            "Chronic respiratory diseases",
            "Immunocompromised condition",
            "Diabetes",
            "Chronic renal disease")
          }
          className="ph3 pv2 bb b--light-silver  riskLevel-5"
        >
          {element7} Risk Level (5): Very High
        </li>
        <li
          hidden={
            (user?.riskLevel === "No preexising conditions",
            "Age 60+",
            "Chronic respiratory diseases",
            "Immunocompromised condition",
            "Diabetes",
            "Cardiovascular diseases")
          }
          className="ph3 pv2 bb b--light-silver  riskLevel-6"
        >
          {element12} Risk Level (6): Highest
        </li>
      </ul>
    </div>
  );
}
export default CovidInfo;
