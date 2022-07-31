import React from "react";
import { useStyle } from "../../assets/styles/services";
import InputBoxes from "./InputBoxes";

const MenuThree = () => {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <InputBoxes num="۱"/>
      <hr className={classes.lineBreak} />
      <InputBoxes num="۲"/>
      <hr className={classes.lineBreak} />
      <InputBoxes num="۳"/>
    </div>
  );
};

export default MenuThree;
