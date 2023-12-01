import React from "react";
import "../helper.js/Rhombus.css";
const Rhombus = ({onClick, value}) => {
  return (
    <div>
      <button className="btnsq" onClick={onClick}>
        <span className=".span">{value}</span>
      </button>
    </div>
  );
};

export default Rhombus;
