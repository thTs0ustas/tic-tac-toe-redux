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

export const playerName = (name) => ({
  type: NAME,
  payload: {
    name,
  },
});
