import React from "react";
import { useStyle } from "../../assets/styles/button";

const SimpleBtn = (props) => {
  const classes = useStyle();
  return (
    <button className={props.blue ? classes.SimpleBtnBlue : classes.SimpleBtn} onClick={props.onClick}>
      <span className={classes.stitle}>{props.title}</span>
      {props.value}
    </button>
  );
};

export default SimpleBtn;
