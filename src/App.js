import React from "react";
import Game from "./react/Game";
import "./App.css";

function App({ xIsNext, value, xPlayer, oPlayer }) {
  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
