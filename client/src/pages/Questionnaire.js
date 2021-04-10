import React from "react";

function Questionnaire() {
  return (
    <div>
      {" "}
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
              <tr className="stripe-dark">
                <td className="pa3">Are you in quarantine?</td>
                <td className="pa3 w-100">
                  <input
                    className="mr4 w-100"
                    type="radio"
                    id="positive"
                    value="positive"
                  />
                </td>
                <td className="pa2">
                  <input
                    className="mr2 w-100"
                    type="radio"
                    id="negative"
                    value="negative"
                  />
                </td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">Have you been tested?</td>
                <td className="pa3 w-100">
                  <input
                    className="mr4 w-100"
                    type="radio"
                    id="positive"
                    value="positive"
                  />
                </td>
                <td className="pa2">
                  <input
                    className="mr2 w-100"
                    type="radio"
                    id="negative"
                    value="negative"
                  />
                </td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">Have you been vaccinated?</td>
                <td className="pa3 w-100">
                  <input
                    className="mr4 w-100"
                    type="radio"
                    id="positive"
                    value="positive"
                  />
                </td>
                <td className="pa2">
                  <input
                    className="mr2 w-100"
                    type="radio"
                    id="negative"
                    value="negative"
                  />
                </td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">Do you have any health conditions?</td>
                <td className="pa3 w-100">
                  <input
                    className="mr4 w-100"
                    type="radio"
                    id="positive"
                    value="positive"
                  />
                </td>
                <td className="pa2">
                  <input
                    className="mr2 w-100"
                    type="radio"
                    id="negative"
                    value="negative"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
export default Questionnaire;
