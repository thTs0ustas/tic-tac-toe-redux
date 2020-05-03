import React from "react";
import { connect } from "react-redux";
import { oPlayer, xPlayer } from "../redux/actionCreators";
import "./square.css";
function Square({
  playerNames,
  payload: { xIsNext, value },
  oPlayer,
  xPlayer,
  winner,
  index,
}) {
  //// Event Handler /////
  const handleClick = (e) => {
    if (value[e] || winner || !playerNames[0]) {
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

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { oPlayer, xPlayer })(Square);
