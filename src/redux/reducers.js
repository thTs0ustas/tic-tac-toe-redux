export const X_PLAYS = "X_PLAYS";
export const O_PLAYS = "O_PLAYS";

const init = {
  payload: {
    value: Array(9).fill(null),
    history: [],
    xIsNext: true,
  },
};

export const reducer = (state = init, action) => {
  let { value, history } = state.payload;
  let newValue = value.slice();
  let newHistory = history.slice();

  switch (action.type) {
    case X_PLAYS:
      newValue[action.payload.index] = action.payload.value;
      newHistory.push(newValue);

      return {
        ...state,
        payload: {
          history: newHistory,
          value: newValue,
          xIsNext: !state.payload.xIsNext,
        },
      };
    case O_PLAYS:
      newValue[action.payload.index] = action.payload.value;
      newHistory.push(newValue);

      return {
        ...state,
        payload: {
          history: newHistory,
          value: newValue,
          xIsNext: !state.payload.xIsNext,
        },
      };
    default:
      return state;
  }
};
