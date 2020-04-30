import React from "react";
import Board from "./Board";
import { connect } from "react-redux";
import { calculateWinner } from "../helper/calculateWinner";

const Game = ({ history, value }) => {
  const winner = calculateWinner(value);

  return (
    <div>
      <Board />
      <ol>
        {history.map((e, index) => {
          return <li key={index}>{<button>{`Turn ${index + 1}`}</button>}</li>;
        })}
        {winner ? <h3>{`Winner ${winner}`}</h3> : null}
      </ol>
    </div>
  );
};

const mapStateToProps = (state) => state.payload;
export default connect(mapStateToProps)(Game);
