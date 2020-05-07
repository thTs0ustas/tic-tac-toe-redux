import React from "react";
import { connect } from "react-redux";
import "./Score.css";

const Score = ({ playerNames, winners }) => {
  console.log(winners);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>{playerNames[0] ? playerNames[0].name : null}</th>
            <th>{playerNames[1] ? playerNames[1].name : null}</th>
          </tr>
        </thead>
        <tbody>
          {winners.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e === "X" && "V"}</td>
                <td>{e === "O" && "V"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Score);
