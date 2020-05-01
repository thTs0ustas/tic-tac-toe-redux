import React from "react";
import Board from "./Board";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { calculateWinner } from "../helper/calculateWinner";
import { playerName } from "../redux/actionCreators";

const Game = ({ history, value, playerName }) => {
  const winner = calculateWinner(value);
  const { register, handleSubmit, errors } = useForm();
  const handleSubmiting = (data) => {
    playerName(data.xPlayer);
    playerName(data.oPlayer);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmiting)}>
        <input
          type="text"
          placeholder="X player"
          name="xPlayer"
          ref={register({ required: true })}
        />
        {errors.xPlayer && console.log("X Player's Name is Required")}
        <input
          type="text"
          placeholder="O player"
          name="oPlayer"
          ref={register({ required: true })}
        />
        {errors.oPlayer && console.log("O Player's Name is Required")}
        <input type="submit" />
      </form>
      <Board />
      <ol>
        {history.map((e, index) => {
          return <li key={index}>{<button>{`Turn ${index + 1}`}</button>}</li>;
        })}
      </ol>
    </div>
  );
};

const mapStateToProps = (state) => state.payload;
export default connect(mapStateToProps, { playerName })(Game);
