import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner" role="status">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
