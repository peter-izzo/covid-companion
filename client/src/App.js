import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Home from "./pages/Home-About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Questionnaire from "./pages/Questionnaire";
import Profile from "./pages/Profile";
import SearchFriends from "./pages/SearchFriends";

const App = () => (
  <div>
    <AmplifySignOut />
    My App
  </div>
);

export default withAuthenticator(App);
