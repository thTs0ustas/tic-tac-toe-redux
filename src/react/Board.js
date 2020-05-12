import React, { useEffect } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import "./Board.css";
import { calculateWinner } from "../helper/calculateWinner";
import { andTheWinnerIs } from "../redux/actionCreators";

function Board({ payload: { xIsNext, value }, playerNames, andTheWinnerIs }) {
  const winner = calculateWinner(value);

  ////// Status //////

  let status;

  if (!playerNames[1]) {
    status = "Register Players";
  } else if (winner) {
    if (winner === "X") {
      status = `Winner: ${playerNames[0].name}`;
    } else if (winner === "O") {
      status = `Winner: ${playerNames[1].name}`;
    }
  } else if (xIsNext) {
    status = `${playerNames[0].name} Plays`;
  } else {
    status = `${playerNames[1].name} Plays`;
  }

  const renderSquare = (i) => {
    return <Square index={i} winner={winner} />;
  };

  useEffect(() => {
    const cleanup = () => {
      if (winner) {
        andTheWinnerIs(winner);
      }
    };
    cleanup();
  }, [andTheWinnerIs, winner]);

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
export default connect(mapStateToProps, { andTheWinnerIs })(Board);
