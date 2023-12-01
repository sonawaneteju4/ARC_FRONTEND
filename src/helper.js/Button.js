import React from "react";
import '../helper.js/button.css'

const Button = ({onClick, value}) => {
  return (
    <div className="my-2">
      <button className="button" onClick={onClick}> <span>{value}</span>
</button>
    </div>
  );
};

export default Button;
