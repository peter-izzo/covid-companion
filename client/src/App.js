import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

const App = () => {
  const handleClick = async() => {
    console.log('click');
    const results = await Auth.currentAuthenticatedUser();
    console.log(results.attributes.sub);
  }
  return (
    <div>
      <AmplifySignOut />
      My App <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default withAuthenticator(App);
