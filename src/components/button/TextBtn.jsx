import React from "react";
import { useStyle } from "../../assets/styles/button";

const TextBtn = (props) => {
  const classes = useStyle();
  return (
    <button onClick={props.onClick} className={classes.textBtn}>
      <span className={classes.iconText}>
        {" "}
        <img src={props.icon} className={classes.iconImage} alt="icon" />
      </span>
      <span className={classes.titleText}>{props.title}</span>
    </button>
  );
};

export default TextBtn;
