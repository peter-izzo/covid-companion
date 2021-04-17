import React from "react";
// import { Route, useHistory } from "react-router-dom";
import { Route } from "react-router-dom";

import HomeAbout from "./pages/Home-About";
// import SignUp from "./pages/SignUp"; @todo delete b/c unsused
// import SignIn from "./pages/SignIn"; @todo delete b/c unsused
// import Navbar from "./components/Navbar/Navbar"; @todo delete b/c unsused
import Questionnaire from "./pages/Questionnaire";
import Profile from "./pages/Profile";
import SearchFriends from "./pages/SearchFriends";
import UpdateProfile from "./pages/UpdateProfile";

import "./index.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

Amplify.configure(awsconfig);

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
        console.log(await Auth.currentAuthenticatedUser());
        history.push("/questionnaire");
      }
    });
  }, []);
  return (
    <>
      {authState === AuthState.SignedIn ? (
        <div className="App">
          {/* <Route exact path="/sign-in" component={SignIn} /> @todo delete b/c unsused
        <Route exact path="/sign-up" component={SignUp} /> */}
          <Route exact path="/questionnaire" component={Questionnaire} />
          <Route exact path="/update-profile" component={UpdateProfile} />
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
