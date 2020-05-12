import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Score.css";

const Score = ({ playerNames, winners }) => {
  let countX = 0;
  let countO = 0;
  winners.forEach((element) => {
    element === "X" ? countX++ : countO++;
  });
  useEffect(() =>
    winners.forEach((element) => {
      element === "X" ? countX++ : countO++;
    })
  );
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>{playerNames[0] ? playerNames[0].name : "X Player"}</th>
            <th>{playerNames[1] ? playerNames[1].name : "O Player"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{countX}</td>
            <td>{countO}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Score);
