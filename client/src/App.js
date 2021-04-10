import React from "react";
import Amplify, { Auth } from "aws-amplify";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Home from "./pages/Home-About";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar/Navbar"
import SignUp from "./pages/SignUp";
import Questionnaire from "./pages/Questionnaire";
import Profile from "./pages/Profile";
import SearchFriends from "./pages/SearchFriends";

const App = () => {
  const handleClick = async () => {
    console.log("click");
    const results = await Auth.currentAuthenticatedUser();
    console.log(results.attributes.sub);
  };
  return (
    <div>
      <Navbar />
      <AmplifySignOut />
      My App <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default withAuthenticator(App);
