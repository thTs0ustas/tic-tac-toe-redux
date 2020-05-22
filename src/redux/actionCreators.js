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
export const winnerCheck = (value) => ({
  type: "WINNER_CHECK",
  payload: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
});
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
    value: Array(9).fill(null),
    history: [],
    xIsNext: true,
  },
});

export const andTheWinnerIs = (winner) => ({
  type: "WE_HAVE_A_WINNER",
  payload: { winner },
});
