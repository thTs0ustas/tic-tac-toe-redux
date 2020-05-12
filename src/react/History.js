import React from "react";
import { letsRestart } from "../redux/actionCreators";
import { connect } from "react-redux";

const History = ({ history, letsRestart }) => {
  return (
    <ol>
      {history.map((e, index) => {
        return (
          <li key={index}>
            {
              <button onClick={() => letsRestart()}>{`Turn ${
                index + 1
              }`}</button>
            }
          </li>
        );
      })}
    </ol>
  );
};
const mapStateToProps = (state) => {
  const { history } = state.payload;
  return { history };
};
export default connect(mapStateToProps, { letsRestart })(History);
