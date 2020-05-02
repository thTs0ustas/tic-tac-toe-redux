/* import { NAME, X_PLAYS, O_PLAYS } from "./actionType";
import { combineReducers } from "redux";

const init = {
  players: [],
  history: [],
  squares: Array(9).fill(null),
  history: [],
  xIsNext: true,
};

export const playersReducer = (state = init, action) => {
  switch (action.type) {
    case NAME:
      return Object.assign({}, state, { players: action.payload });

    default:
      return state;
  }
};

export const squareReducer = (state = init, action) => {
  const newSquares = state.squares.slice();

  switch (action.type) {
    case X_PLAYS:
      newSquares[action.payload.index] = action.payload.value;
      return Object.assign(
        {},
        state,
        { squares: newSquares ,
        { history: [...state.history, newSquares] },
        { xIsNext: !state.payload.xIsNext }
      );

    case O_PLAYS:
      newSquares[action.payload.index] = action.payload.value;
      return Object.assign({}, state, {
        squares: newSquares,
        history: [...state.history, newSquares],
        xIsNext: !state.payload.xIsNext,
      });

    default:
      return state;
  }
};

export default combineReducers({ playersReducer, squareReducer });
 */
