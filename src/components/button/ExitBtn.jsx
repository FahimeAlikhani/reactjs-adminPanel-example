import React from "react";
import { useStyle } from "../../assets/styles/button";

const ExitBtn = (props) => {
  const classes = useStyle();
  return (
    <button className={classes.exitBtn}>
      <img src={props.icon} className={classes.iconImage} alt="icon" />

      <span className={classes.title}>{props.title}</span>
    </button>
  );
};

export default ExitBtn;
