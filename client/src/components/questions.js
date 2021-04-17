export const questions = [
  {
    name: "covidStatus",
    type: "boolean",
    prompt: "What is your Covid status?",
    answers: ["Positive (+)", "Negative (-)"],
    when: (questions) => questions.location,
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
    type: "select",
    prompt: "What day of quarantine are you in?",
    answers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    when: (questions) => questions.inQuarantine === "Yes",
  },
  {
    name: "tested",
    type: "boolean",
    prompt: "Have you been tested?",
    answers: ["Yes", "No"],
    when: (questions) =>
      questions.covidStatus === "Negative (-)" ||
      questions.inQuarantine === "No" ||
      questions.quarantineDay,
  },
  {
    name: "testDate",
    type: "date",
    prompt: "When were you last tested?",
    answers: "",
    when: (questions) => questions.tested === "Yes",
  },
  {
    name: "vaccinated",
    type: "boolean",
    prompt: "Have you been vaccinated? (received at least one dose)",
    answers: ["Yes", "No"],
    when: (questions) => questions.testDate || questions.tested === "No",
  },
  {
    name: "vaccineCo",
    type: "select",
    prompt: "Which vaccine did you receive?",
    answers: ["Other", "Pfizer", "Moderna", "Johnson & Johnson"],
    when: (questions) => questions.vaccinated === "Yes",
  },
  {
    name: "riskLevel",
    type: "select",
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

  {
    name: "sellYourSoul",
    type: "checkbox",
    prompt: "Ready to create profile?",
    when: (questions) =>
      questions.riskLevel ||
      questions.riskLevel === "No preexisting conditions",
  },
];
