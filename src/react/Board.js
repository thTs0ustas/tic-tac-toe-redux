import React, { useEffect } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import "./Board.css";
import { calculateWinner } from "../helper/calculateWinner";

function Board({ xIsNext, value, history }) {
  const winner = calculateWinner(value);

  ////// Status //////

  let status;
  winner
    ? (status = `Winner ${winner}`)
    : history.length === 9
    ? (status = "Please Start Again")
    : (status = xIsNext ? "X Plays" : "O Plays");
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

const mapStateToProps = (state) => state.payload;
export default connect(mapStateToProps)(Board);
