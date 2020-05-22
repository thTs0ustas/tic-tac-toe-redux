import { ofType, combineEpics } from "redux-observable";
import { mapTo, throttleTime, mergeMap, filter, map } from "rxjs/operators";
import {
  gameRestart,
  gameStart,
  andTheWinnerIs,
} from "../redux/actionCreators";
import { from } from "rxjs";

const epicStart = (action$) =>
  action$.pipe(ofType("LETS_START"), throttleTime(3000), mapTo(gameStart()));

const epicRestart = (action$) =>
  action$.pipe(
    ofType("LETS_RESTART"),
    throttleTime(3000),
    mapTo(gameRestart())
  );

/* const winnerSquareList = from([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]);

const epicWinner = (action$) => {
  action$.pipe(
    ofType("WINNER_CHECK"),
    mergeMap(
      winnerSquareList.pipe(
        filter(
          (e) =>
            action$[e[0]] &&
            action$[e[0]] === action$[e[1]] &&
            action$[e[0]] === action$[e[2]]
        )
      )
    ),
    mapTo((e) => andTheWinnerIs(e))
  );
}; */

export default combineEpics(epicStart, epicRestart /* epicWinner */);
