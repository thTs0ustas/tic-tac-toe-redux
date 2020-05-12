import React from "react";
import { useForm } from "react-hook-form";
import { playerName, letsStart, letsRestart } from "../redux/actionCreators";
import { connect } from "react-redux";

const Form = ({ letsStart, playerName }) => {
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
        <input type="submit" value="Press" />
      </form>
    </div>
  );
};
export default connect(null, { playerName, letsStart, letsRestart })(Form);
