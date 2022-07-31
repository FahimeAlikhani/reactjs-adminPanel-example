import React from "react";
import { useStyle } from "../../assets/styles/card";

const InfoCard = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.infoCard}>
      <div className={classes.content}>
        <span className={classes.icon}>
          <img src={props.icon} className={classes.iconImage} alt="icon" />
        </span>
        <div className={classes.title}>{props.title}</div>
        <div
          className={
            props.color === "BLUE"
              ? classes.value
              : `${classes.value} ${classes.Rvalue}`
          }
        >
          {props.value}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
