import React from "react";
import Board from "./Board";
import Score from "./Score";
import "./Game.css";
import Form from "./Form";
import History from "./History";

export const Game = () => {
  return (
    <div>
      <Form />
      <Board />
      <Score />
      <History />
    </div>
  );
};
