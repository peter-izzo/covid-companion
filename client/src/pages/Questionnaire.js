import { useState, useEffect, useCallback } from "react";
import { questions } from "../components/questions";
import { Auth } from "aws-amplify";
import axios from "axios";

import Question from "../components/Question";
import "../index.css";
import { useHistory } from "react-router-dom";

export default function Questionnaire() {
  const history = useHistory();
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
    const _id = user.attributes.sub;
    answers._id = _id;

    axios.post("http://localhost:3001/create", answers).then((res) => {
      console.log(res);
      history.push("/profile");
    });
    console.log(answers);
  };

  async function getUserData() {
    const user = await Auth.currentAuthenticatedUser();
    axios.get(`http://localhost:3001/profile/${user.attributes.sub}`).then(
      (res) => {
        console.log(res.data);
        if (res?.data?.name) {
          history.push("/profile");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  async function updateUserData() {
    const user = await Auth.currentAuthenticatedUser();
    axios.put(`http://localhost:3001/profile/${user.attributes.sub}`).then(
      (res) => {
        console.log(res.data);
        if (res?.data?.name) {
          history.push("/profile");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Function to call updateUserData????
  // useEffect(() => {
  //   updateUserData();
  // }, []); ?????

  useEffect(() => {
    getUserData();
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
          <button
            className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green fw6 br2 shadow-3"
            type="submit"
            style={{
              marginLeft: "10px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
