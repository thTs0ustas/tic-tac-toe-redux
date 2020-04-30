export const X_PLAYS = "X_PLAYS";
export const O_PLAYS = "O_PLAYS";

const init = {
  payload: {
    value: Array(9).fill(""),
    history: [],
    xIsNext: true,
  },
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case X_PLAYS:
      return {
        ...state,
        payload: {
          history: state.payload.history.concat([state.payload.value.flat()]),
          value: [
            ...state.payload.value
              .map((e, index) => {
                if (index !== action.payload.index) {
                  return e;
                }
                return [...e, action.payload.value];
              })
              .flat(),
          ],
          xIsNext: !state.payload.xIsNext,
        },
      };
    case O_PLAYS:
      return {
        ...state,
        payload: {
          history: state.payload.history.concat([state.payload.value.flat()]),
          value: [
            ...state.payload.value
              .map((e, index) => {
                if (index !== action.payload.index) {
                  return e;
                }
                return [...e, action.payload.value];
              })
              .flat(),
          ],

          xIsNext: !state.payload.xIsNext,
        },
      };
    default:
      return state;
  }
};
