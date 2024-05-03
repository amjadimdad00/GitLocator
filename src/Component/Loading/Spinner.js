import React from "react";
import spinner from "./loading-gif-png-5.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="loader"
        style={{ display: "block", width: "200px", margin: "auto" }}
      />
    </>
  );
};

export default Spinner;
