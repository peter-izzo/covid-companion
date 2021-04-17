import React from "react";
import UpdateQuestionnaire from "../components/UpdateQuestionnaire";

export default function UpdateProfile() {
  // importing to update profile by doing questionnaire
  return (
    <div>
      <div className="Question pa3" style={{ backgroundColor: "#f04500" }}>
        <h1 className="pa3 br3">Update your Covid Info</h1>
        <h2 className="pa3 br3">
          To update your profile, please answer the following questions about
          your Covid status:
        </h2>
      </div>
      <UpdateQuestionnaire />
    </div>
  );
}
