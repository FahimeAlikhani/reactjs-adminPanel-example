import React from "react";
import { useStyle } from "../../assets/styles/button";

const searchBtn = (props) => {
  const classes = useStyle();
  return (
    <button className={classes.searchBtn} onClick={props.onClick}>
      <span className={classes.stitle}>{props.title}</span>
    </button>
  );
};

export default searchBtn;
