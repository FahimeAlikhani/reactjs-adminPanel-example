import React from "react";
import { useStyle } from "../../assets/styles/card";
import TextBtn from "../button/TextBtn";
import Edit from "../../assets/images/Edit.svg"
const InfoCardEdit = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.infoCard}>
      <div className={classes.content}>
        <span className={classes.icon}>
          <img src={props.icon} className={classes.iconImage} alt="icon" />
        </span>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.Bvalue}>{props.value}</div>
        <div>
          <TextBtn
            title="ویرایش"
            onClick={() => console.log("test")}
            icon={Edit}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCardEdit;
