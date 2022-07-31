import React from "react";
import { useStyle } from "../../assets/styles/input";

const Input = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.inputTitle}>
      <div className={classes.titleContainer}>
        <span className={classes.title}>{props.title}</span>
      </div>
      <div className={classes.inputContainer}>
        <input
          className={props.large ? classes.input : classes.SmallInput}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Input;
