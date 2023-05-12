import React from "react";              //creating for label for category
import "./style.css";

const Chip = ({ label }) => (
  <div>
    <p className="chip">{label}</p>
  </div>
);

export default Chip;
