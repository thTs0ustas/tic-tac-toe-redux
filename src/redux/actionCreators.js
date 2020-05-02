import { O_PLAYS, NAME, X_PLAYS } from "./actionType";

export const xPlayer = (index) => ({
  type: X_PLAYS,
  payload: {
    value: "X",
    index,
  },
});

export const oPlayer = (index) => ({
  type: O_PLAYS,
  payload: {
    value: "O",
    index,
  },
});

let id = 0;
export const playerName = (name) => {
  id = id + 1;
  return {
    type: NAME,
    payload: {
      id: id,
      name,
    },
  };
};

export const letsStart = () => ({
  type: "LETS_START",
});
export const letsRestart = () => ({
  type: "LETS_RESTART",
});
export const gameStart = () => ({
  type: "GAME_START",
  payload: {
    playerNames: [],
    payload: {
      value: Array(9).fill(null),
      history: [],
      xIsNext: true,
    },
  },
});

export const gameRestart = () => ({
  type: "GAME_RESTART",
  payload: {
    payload: {
      value: Array(9).fill(null),
      history: [],
      xIsNext: true,
    },
  },
});
