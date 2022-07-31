import React from "react";
import { useStyle } from "../../assets/styles/galery";
import SimpleBtn from "../../components/button/SimpleBtn";
import InputBoxes from "./InputBoxes";
import Plus from "../../assets/images/Plus.svg";

const MenuFour = () => {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <InputBoxes num="۱" />
      <div align="left" className={classes.btnContainer}>
        <SimpleBtn title="انصراف" />
        <SimpleBtn blue title="تایید و ثبت تصویر" />
      </div>
      <hr className={classes.lineBreak} />
      <div className={classes.addImage}>
      اضافه کردن تصویر به گالری 
        <img src={Plus} alt="add" className={classes.addImageLogo} />
      </div>
    </div>
  );
};

export default MenuFour;
