import { NAME, X_PLAYS, O_PLAYS } from "./actionType";
//import { combineReducers } from "redux";

const init = {
  winners: [],
  playerNames: [],
  payload: {
    value: Array(9).fill(null),
    history: [],
    xIsNext: true,
  },
};

export const reducer = (state = init, action) => {
  let { value, history } = state.payload;
  let newValue = value.slice();
  switch (action.type) {
    case X_PLAYS:
      newValue[action.payload.index] = action.payload.value;
      return {
        ...state,
        payload: {
          history: [...history, newValue],
          value: newValue,
          xIsNext: !state.payload.xIsNext,
        },
      };
    case O_PLAYS:
      newValue[action.payload.index] = action.payload.value;
      return {
        ...state,
        payload: {
          history: [...history, newValue],
          value: newValue,
          xIsNext: !state.payload.xIsNext,
        },
      };
    case NAME:
      return Object.assign({}, state, {
        playerNames: [...state.playerNames, action.payload],
      });
    case "LETS_START":
      return Object.assign({}, init, { playerNames: state.playerNames });
    case "LETS_RESTART":
      return Object.assign({}, init, {
        playerNames: state.playerNames,
        winners: state.winners,
      });
    case "WE_HAVE_A_WINNER":
      return { ...state, winners: [...state.winners, action.payload.winner] };
    default:
      return state;
  }
};

/* 
export const reducer = (state = init, action) => {
  let { value, history } = state.payload;
  let newValue = value.slice();
  switch (action.type) {
    case X_PLAYS:
      newValue[action.payload.index] = action.payload.value;
      return Object.assign({}, state, {
        payload: {
          history: [newValue],
          value: newValue,
          xIsNext: !state.payload.xIsNext,
        },
      });
    case O_PLAYS:
      newValue[action.payload.index] = action.payload.value;
      return Object.assign({}, state, {
        payload: {
          history: [newValue],
          value: newValue,
          xIsNext: !state.payload.xIsNext,
        },
      });
    case NAME:
      return [...state.playerNames, { playerNames: action.payload }];
    default:
      return state;
  }
}; */
