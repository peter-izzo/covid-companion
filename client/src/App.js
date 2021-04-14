import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeAbout from "./pages/Home-About";
import "./index.css";
// import Amplify, { Auth } from "aws-amplify";
// import awsconfig from "./aws-exports";
// import {
//   withAuthenticator,
//   AmplifySignOut,
//   AmplifySignUp,
// } from "@aws-amplify/ui-react";
// Amplify.configure(awsconfig);

import SignIn from "./pages/SignIn";
// // import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp";
import Questionnaire from "./pages/Questionnaire";
import Profile from "./pages/Profile";
import SearchFriends from "./pages/SearchFriends";
// import SearchFriends from "./pages/SearchFriends";

// Original Code 4/10/2021 @audit-issue app.js
// const App = () => {
//   const handleClick = async () => {
//     console.log("click");
//     const results = await Auth.currentAuthenticatedUser();
//     console.log(results.attributes.sub);
//   };
//   return (
//     <div>
//       <Navbar />
//       <AmplifySignOut />
//       My App <button onClick={handleClick}>Submit</button>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/home" component={HomeAbout} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/questionnaire" component={Questionnaire} />
        {/* <Route exact path="/editprofile" component={Questionnaire} /> */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search" component={SearchFriends} />
      </div>
    </Router>
  );
}

export default App;
