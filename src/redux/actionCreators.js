import { O_PLAYS } from "./actionType";
import { X_PLAYS } from "./actionType";

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
