import React, { useEffect } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import "./Board.css";
import { calculateWinner } from "../helper/calculateWinner";

function Board({ payload: { xIsNext, value, history }, playerNames }) {
  const winner = calculateWinner(value);

  ////// Status //////

  let status;
  /* winner
    ? (status = `Winner ${winner}`)
    : history.length === 9
    ? (status = "Please Start Again")
    : xIsNext
    ? !playerNames[1]
      ? (status = "Register Players")
      : (status = `${playerNames[1].name} Plays`)
    : (status = `${playerNames[2].name} Plays`); */

  if (!playerNames[1]) {
    status = "Register Players";
  } else if (winner) {
    if (winner === "X") {
      status = `Winner: ${playerNames[1].name}`;
    } else if (winner === "O") {
      status = `Winner: ${playerNames[2].name}`;
    }
  } else if (xIsNext) {
    status = `${playerNames[1].name} Plays`;
  } else {
    status = `${playerNames[2].name} Plays`;
  }

  const renderSquare = (i) => {
    return <Square index={i} winner={winner} />;
  };

  ////Just Evaluation////

  useEffect(() => {
    console.log(value);
    console.log(history);
  });

  return (
    <div className="board">
      <h3>{status}</h3>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Board);
