import { of, from } from "rxjs";
//import { mapTo, throttleTime, mergeMap, filter, map } from "rxjs/operators";

export const winner = from([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]);
winner.subscribe((i) => console.log(i));
