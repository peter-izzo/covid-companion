import React from "react";
import {  Route, useHistory } from "react-router-dom";
import HomeAbout from "./pages/Home-About";
// // import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp";

// import SearchFriends from "./pages/SearchFriends";

import "./index.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar/Navbar";
import Questionnaire from "./pages/Questionnaire";
import Profile from "./pages/Profile";
import SearchFriends from "./pages/SearchFriends";
Amplify.configure(awsconfig);
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
  const history = useHistory();
  const [user, setUser] = React.useState();
  const [authState, setAuthState] = React.useState();
  React.useEffect(() => {
    return onAuthUIStateChange(async (nextAuthState, authData) => {
      const creds = await Auth.currentCredentials();
      setAuthState(nextAuthState);
      setUser({ ...authData, ...creds });
      if (nextAuthState === AuthState.SignedIn) {
        history.push("/profile");
      }
    });
  }, []);
  return (
    <>
      {authState === AuthState.SignedIn ? (
        <div className="App">
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/questionnaire" component={Questionnaire} />
          {/* <Route exact path="/editprofile" component={Questionnaire} /> */}
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/search" component={SearchFriends} />
        </div>
      ) : (
        <>
          <Route exact path="/" component={HomeAbout} />
          <Route exact path="/home" component={HomeAbout} />
          <AmplifyAuthenticator />
        </>
      )}
    </>
  );
}

export default App;
