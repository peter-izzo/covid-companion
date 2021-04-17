import React from "react";

// Add Friend Button
function CardBtn() {
  return (
    <button
      class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60 shadow-5 br2 fw5"
      style={{
        backgroundColor: "#c5d0ff",
        marginLeft: "20px",
        color: "black",
      }}
      type="submit"
    >
      + Add to Circle
    </button>
  );
}

export default CardBtn;
