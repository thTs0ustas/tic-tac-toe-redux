import React from "react";
import "./square.css";

function Square({ disabled, values, onClick }) {
  return (
    <button className="square" disabled={disabled} onClick={onClick}>
      {values}
    </button>
  );
}

export default Square;
