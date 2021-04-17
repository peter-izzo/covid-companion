import { useState, useEffect, useCallback } from "react";
import { questions } from "../components/questions";
import { Auth } from "aws-amplify";
import axios from "axios";

import Question from "../components/Question";
import "../index.css";

export default function Questionnaire() {
  // Create initial state object of questions set to empty strings
  const initialValue = () => {
    const formQuestions = {};
    // const formQuestions = { name: "", location: "" };

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
    const user = await Auth.currentAuthenticatedUser();
    const userId = user.attributes.sub;
    answers.userId = userId;

    axios.post("http://localhost:3001/create", answers);
    console.log(answers);
  };
  useEffect(() => {
    // const user = Auth.currentAuthenticatedUser();
    const userId = null;
    axios.get(`http://localhost:3001/profile/${userId}`).then(
      (answers) => {
        console.log(answers);
        setanswers(answers);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="Question pa3" style={{ backgroundColor: "green" }}>
      <h1 className="pa3 br3">Covid Questionnaire</h1>
      <h2 className="pa3 br3">
        To create your profile, please answer the following questions about your
        Covid status:
      </h2>
      <form
        className="pa3 fw6 br3 shadow-3"
        onSubmit={handleSubmit}
        style={{ backgroundColor: "white" }}
      >
        <label htmlFor="name">
          Name
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label htmlFor="location">
          Location
          <input type="text" name="location" onChange={handleChange} />
        </label>

        {questions.map((q) => {
          return (
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
          );
        })}
        {answers.sellYourSoul && (
          <a
            className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green fw6 br2 shadow-3"
            href="/profile"
            type="submit"
            style={{
              marginLeft: "10px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Submit
          </a>
        )}
      </form>
    </div>
  );
}
