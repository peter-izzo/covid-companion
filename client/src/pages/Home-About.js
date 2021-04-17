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
            <div className="dtc w2 v-mid pa3">
              <a
                href="/"
                className="dib w2 h2 pa1 ba b--white-90 grow-large border-box"
              >
                <svg
                  className="link white-90 hover-white"
                  data-icon="skull"
                  viewBox="0 0 32 32"
                  style={{ fill: "red" }}
                >
                  <title>skull icon</title>
                  <path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path>
                </svg>
              </a>
            </div>
          </nav>

          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">
              Keep track of your COVID status and the places you've been
            </h1>
            <h2 className="fw1 f3 white-80 mt3 mb4">
              When you change your status, your friends and the places you've
              visited are automatically updated. By keeping everyone in the
              loop, people can get tested faster and reduce the spread.
            </h2>
            <a
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
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomeAbout;
