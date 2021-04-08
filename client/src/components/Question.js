// individual question
import React from "react";

function Questions() {
  return (
    <div className="pa2">
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center" cellspacing="3">
          <thead>
            <tr className="stripe-dark">
              <th className="fw6 tl pa3 bg-white">Question</th>
              <th className="fw6 tl pa3 bg-white">Yes</th>
              <th className="fw6 tl pa3 bg-white">No</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            <tr className="stripe-dark">
              <td className="pa3 w-100">What is your Covid status?</td>
              <td className="pa3 w-100">
                <input
                  className="mr3 w-100"
                  type="radio"
                  id="positive"
                  value="positive"
                />
              </td>
              <td className="pa3">
                <input
                  className="mr3 w-100"
                  type="radio"
                  id="negative"
                  value="negative"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Questions;

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
