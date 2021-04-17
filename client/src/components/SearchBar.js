import React from "react";

function SearchBar({ searchTerm, onChange }) {
  return (
    <div>
      <div className="pa4-l">
        <form
          className="bg-light-red mw7 center pa3 br2-ns ba b--black-10"
          style={{
            backgroundColor: "#9999ff",
            paddingBottom: "20px",
          }}
        >
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f4 fw6 f4-ns mb3 white-100">
              Add to your Friend Circle
            </legend>
            <div className="cf">
              {/* <label className="clip" for="friend-search">
                Search for Friend
              </label> */}
              <input
                className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-75 w-75-m w-80-l br2-ns br--left-ns br3 shadow-3"
                placeholder="Adam Smith"
                type="text"
                name="friend-name"
                value={searchTerm}
                id="friend-name"
                onChange={onChange}
              />
              <input
                className="f6 fw6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-25 w-25-m w-20-l br2-ns br--right-ns br3 shadow-3"
                style={{
                  backgroundColor: "#bdd5ff",
                  paddingLeft: "15px",
                  color: "black",
                }}
                type="search"
                value="Search"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
export default SearchBar;
