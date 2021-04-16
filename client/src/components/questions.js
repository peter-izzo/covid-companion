export const questions = [
  {
    name: "covidStatus",
    type: "boolean",
    prompt: "What is your Covid status?",
    answers: ["Positive (+)", "Negative (-)"],
    // when: login => skip questions, signup => go to first question in form
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
    answers: ["Pfizer", "Moderna", "Johnson & Johnson"],
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

// Q: What is your gender? (dropdown m/f/ n/a)
// Q: How old are you? (dropdown)
// Q: Where are you from? (input city) (dropdown state)
// Q: What is your Covid Status?
// A1: Positive (+) > // IF A1, Q: Are you in quarantine?
// Q: Are you in quarantine?
// A3: Yes > IF A3, Q: What day of quarantine are you in? (dropdown #), move to next question
// A4: No > IF A4, move to next question
// A2: Negative (-) > // IF A2, Q: Have you been tested?
// Q: Have you been tested?
// A5: Yes > IF A5, Q: When were you last tested? (dropdown date)
// A6: No > IF A6, Alert: You should get tested! link to testing site, move to next question
// Q: Have you been vaccinated? (received at least one dose)
// A7: Yes > IF A7, Q: Which vaccine? (dropdown options)
// A8: No > IF A8, Q: Are you scheduled for your vaccine?
// Q: Are you scheduled for your vaccine?
// A9: Yes > IF A9, Move to next question
// A10: No > IF A10, Alert: You should schedule your vaccine. link to vaccine sites)
// Q: Do you have any serious health conditions?
// A11: No preexisting conditions (low -green)
// A12: Age 60+ > (med risk -yellow)
// A13: Chronic respiratory diseases > (high risk - yellow-orange) [COPD, asthma, occupational lung disease, pulmonary hypertension, sleep apnea]
// A14: Immunocompromised condition (HIV/AIDS, cancers, hepatitis  -orange)
// A15: Diabetes [1 or 2] (higher - orange-red)
// A16: Cardiovascular diseases (highest - red) [coronary artery disease, high blood pressure, congestive heart failure, arrhythmia, peripheral artery disease, congenital heart disease]
// A17: Chronic renal disease (highest - dark red)
