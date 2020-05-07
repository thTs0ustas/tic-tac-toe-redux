import React from "react";
import Board from "./Board";
import Score from "./Score";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { playerName, letsStart, letsRestart } from "../redux/actionCreators";
import "./Game.css";

const Game = ({ payload: { history }, letsStart, letsRestart, playerName }) => {
  const { register, handleSubmit, errors } = useForm();
  const handleSubmiting = (data) => {
    playerName(data.xPlayer);
    playerName(data.oPlayer);
    letsStart();
  };
  return (
    <div className="gameDiv">
      <form onSubmit={handleSubmit(handleSubmiting)}>
        <input
          type="text"
          placeholder="X player"
          name="xPlayer"
          ref={register({ required: true })}
        />
        {errors.xPlayer && console.log("-X- Player's Name is Required")}
        <input
          type="text"
          placeholder="O player"
          name="oPlayer"
          ref={register({ required: true })}
        />
        {errors.oPlayer && console.log("-O- Player's Name is Required")}
        <input type="submit" />
      </form>
      <div className="copm">
        <Board />
        <Score />
      </div>
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
    </div>
  );
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { playerName, letsStart, letsRestart })(
  Game
);
