import { useState, useEffect, useCallback } from "react";
import { questions } from "../components/questions";
import axios from "axios";

import Question from "../components/Question";
// import "./styles.css";

export default function Questionnaire() {
  // Create initial state object pf questions set to empty strings
  const initialValue = () => {
    const formQuestions = {};

    for (let q of questions) {
      formQuestions[q.name] = "";
    }
    return formQuestions;
  };

  // initialize form state
  const [answers, setanswers] = useState(initialValue);

  // set form fields to user input
  const handleChange = (e) => {
    setanswers({
      ...answers,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  // set question value to empty string when hidden
  const handleHide = (name) => setanswers((prev) => ({ ...prev, [name]: "" }));

  const memoizedHandleHide = useCallback(handleHide, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const user = await Auth.currentAuthenticedUser();
    // const userId = user.attributes.sub;
    // answers.userId = userId;

    // send data with userId
    // axios.post("covidcompanion.com/api", answers);
    console.log(answers);
  };

  const getUserData = async (userId) => {
    // get data by userId
    axios.get(`covidcompanion.com/api/profile/${userId}`);
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <div className="Question">
      <h1>Covid Questionnaire</h1>
      <h2>Start answering to see some magic happen!</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => {
          return (
            <div style={{ marginBottom: "10px" }}>
              <Question
                data={answers}
                name={q.name}
                type={q.type}
                prompt={q.prompt}
                answers={q.answers}
                when={q.when}
                onChange={handleChange}
                onHide={memoizedHandleHide}
              />
            </div>
          );
        })}
        {answers.sellYourSoul && <button type="submit">Submit</button>}
      </form>
    </div>
  );
}

// function Questionnaire() {
//   return (
//     <div>
//       {" "}
//       <div className="pa2">
//         <div className="overflow-auto">
//           <table className="f6 w-100 mw8 center" cellspacing="3">
//             <thead>
//               <tr className="stripe-dark">
//                 <th className="fw6 tl pa3 bg-white">Question</th>
//                 <th className="fw6 tl pa3 bg-white">Yes</th>
//                 <th className="fw6 tl pa3 bg-white">No</th>
//               </tr>
//             </thead>
//             <tbody className="lh-copy">
//               <tr className="stripe-dark">
//                 <td className="pa3 w-100">What is your Covid status?</td>
//                 <td className="pa3 w-100">
//                   <input
//                     className="mr3 w-100"
//                     type="radio"
//                     id="positive"
//                     value="positive"
//                   />
//                 </td>
//                 <td className="pa3">
//                   <input
//                     className="mr3 w-100"
//                     type="radio"
//                     id="negative"
//                     value="negative"
//                   />
//                 </td>
//               </tr>
//               <tr className="stripe-dark">
//                 <td className="pa3">Are you in quarantine?</td>
//                 <td className="pa3 w-100">
//                   <input
//                     className="mr4 w-100"
//                     type="radio"
//                     id="positive"
//                     value="positive"
//                   />
//                 </td>
//                 <td className="pa2">
//                   <input
//                     className="mr2 w-100"
//                     type="radio"
//                     id="negative"
//                     value="negative"
//                   />
//                 </td>
//               </tr>
//               <tr className="stripe-dark">
//                 <td className="pa3">Have you been tested?</td>
//                 <td className="pa3 w-100">
//                   <input
//                     className="mr4 w-100"
//                     type="radio"
//                     id="positive"
//                     value="positive"
//                   />
//                 </td>
//                 <td className="pa2">
//                   <input
//                     className="mr2 w-100"
//                     type="radio"
//                     id="negative"
//                     value="negative"
//                   />
//                 </td>
//               </tr>
//               <tr className="stripe-dark">
//                 <td className="pa3">Have you been vaccinated?</td>
//                 <td className="pa3 w-100">
//                   <input
//                     className="mr4 w-100"
//                     type="radio"
//                     id="positive"
//                     value="positive"
//                   />
//                 </td>
//                 <td className="pa2">
//                   <input
//                     className="mr2 w-100"
//                     type="radio"
//                     id="negative"
//                     value="negative"
//                   />
//                 </td>
//               </tr>
//               <tr className="stripe-dark">
//                 <td className="pa3">Do you have any health conditions?</td>
//                 <td className="pa3 w-100">
//                   <input
//                     className="mr4 w-100"
//                     type="radio"
//                     id="positive"
//                     value="positive"
//                   />
//                 </td>
//                 <td className="pa2">
//                   <input
//                     className="mr2 w-100"
//                     type="radio"
//                     id="negative"
//                     value="negative"
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <button>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Questionnaire;
