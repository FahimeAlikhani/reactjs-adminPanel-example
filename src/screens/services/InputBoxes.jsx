import React, { useState } from "react";
import { useStyle } from "../../assets/styles/input";
import Input from "../../components/inputs/Input";

const InputBoxes = ({num}) => {
  const [title, setTitle] = useState("");
  const [Info, setInfo] = useState("");

  const classes = useStyle();
  return (
    <div className={classes.box}>
      <div className={classes.iconCounter}>
          <div className={classes.numIcon}>
              {num}
          </div>
          <div className={classes.vl}></div>
      </div>
      <div>
        <div className={classes.titleInputContainer}>
          <Input onChange={(e) => setTitle(e.target.value)} title="عنوان" />
        </div>
        <div>
          <Input
            onChange={(e) => setInfo(e.target.value)}
            title="توضیحات"
            large
          />
        </div>
      </div>
    </div>
  );
};

export default InputBoxes;
