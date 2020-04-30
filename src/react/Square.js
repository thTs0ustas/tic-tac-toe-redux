import React from "react";
import "./square.css";
import { connect } from "react-redux";
import { oPlayer, xPlayer } from "../redux/actionCreators";

function Square({ index, xIsNext, value, oPlayer, xPlayer, winner }) {
  //// Event Handler /////
  const handleClick = (e) => {
    if (value[e] || winner) {
      return;
    }
    xIsNext ? xPlayer(e) : oPlayer(e);
  };

  return (
    <button className="square" onClick={() => handleClick(index)}>
      {value[index]}
    </button>
  );
}

const mapStateToProps = (state) => state.payload;
export default connect(mapStateToProps, { oPlayer, xPlayer })(Square);
