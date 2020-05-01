import { NAME, X_PLAYS, O_PLAYS } from "./actionType";
//import { combineReducers } from "redux";

const init = {
  playerNames: [{ name: {}, id: 0 }],
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
      return {
        ...state,
        playerNames: [
          ...state.playerNames,
          { name: action.payload.name, id: state.playerNames[0].id + 1 },
        ],
      };
    default:
      return state;
  }
};

/* const nameReducer = (
  state = { playerNames: [{ name: {}, id: 0 }] },
  action
) => {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        playerNames: [
          { name: action.payload.name, id: state.playerNames[0].id + 1 },
        ],
      };
    default:
      return state;
  }
};

export default combineReducers({ reducer, nameReducer }); */
