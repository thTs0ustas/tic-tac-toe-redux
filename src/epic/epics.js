import { ofType, combineEpics } from "redux-observable";
import { mapTo, throttleTime } from "rxjs/operators";
import { gameRestart, gameStart } from "../redux/actionCreators";

export const epicStart = (action$) =>
  action$.pipe(ofType("LETS_START"), throttleTime(3000), mapTo(gameStart()));

export const epicRestart = (action$) =>
  action$.pipe(
    ofType("LETS_RESTART"),
    throttleTime(3000),
    mapTo(gameRestart())
  );

export default combineEpics(epicStart, epicRestart);
