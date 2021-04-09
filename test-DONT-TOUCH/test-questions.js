import React from "react";

const questions = [
  {
    name: "covidStatus",
    prompt: "What is your Covid status?",
    answers: ["Positive (+)", "Negative (-)"],
  },

  {
    name: "inQuarantine",
    type: "boolean",
    prompt: "Are you in quarantine?",
    when: (questions) => questions.covidStatus === "Positive (+)",
    answers: ["Yes", "No"],
  },

  {
    name: "quarantineDay",
    type: "number",
    prompt: "What day of quarantine are you in?",
    answers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    when: (questions) => questions.inQuarantine === "Yes",
  },
  {
    name: "tested",
    type: "boolean",
    prompt: "Have you been tested?",
    answers: ["Yes", "No"],
    when: (questions) => questions.covidStatus === "Negative (-)",
  },
  {
    name: "testDate",
    type: "Date",
    prompt: "When were you last tested?",
    answers: "",
    when: (questions) => questions.tested === "Yes",
  },
  {
    name: "vaccinated",
    type: "boolean",
    prompt: "Have you been vaccinated? (received at least one dose)",
    answers: ["Yes", "No"],
    when: (questions) => questions.tested === "Yes" || "No",
  },
  {
    name: "vaccineCo",
    type: "list",
    prompt: "Which vaccine did you receive?",
    answers: ["Pfizer", "Moderna", "Johnson & Johnson"],
    when: (questions) => questions.vaccinated === "Yes",
  },
  {
    name: "riskLevel",
    type: "list",
    prompt: "Do you have any serious health conditions?",
    answers: [
      "No preexising conditions",
      "Age 60+",
      "Chronic respiratory diseases",
      "Immunocompromised condition",
      "Diabetes",
      "Cardiovascular diseases",
      "Chronic renal disease",
    ],
    when: (questions) => questions.vaccineCo || questions.vaccinated === "No",
  },
];

function Questions() {
  return (
    <div></div>
    // if (questions[1].answers === "Positive (+)") {
    //     return questions[2];
    // } else if (questions[1].answers === "Negative (-)") {
    //     return questions[4];
    // }
  );
}

export default Questions;

// {
//     name: "",
//     type: "",
//     prompt: "",
//     answers: "",
//     when: ""
// },
