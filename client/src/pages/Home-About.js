import React from "react";

function HomeAbout() {
  return (
    <div>
      <header className="sans-serif">
        <div
          className="cover bg-left bg-center-l"
          style={{ backgroundImage: "../imgs/covid-img" }}
        />
        <div className="bg-black-80 pb5 pb6-m pb7-l">
          <nav className="dt w-100 mw8 center">
            <div className="dtc w2 v-mid pa3"></div>
          </nav>

          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw3 white-90 mb0 lh-title">
              The COVID Companion: Share your Status to Stop the Spread
            </h1>
            <h2 className="fw2 f3 white mt3 ">
              Keep track of your COVID status in real time. Are your friends
              "safe" to be around? Sign in to find out.
            </h2>
            {/* <a
              className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
              href="/sign-in"
            >
              Sign In
            </a>
            <span className="dib v-mid ph3 white-70 mb3">or</span>
            <a
              className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
              href="/sign-up"
            >
              Sign Up
            </a> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomeAbout;
