import React, { useState } from "react";
import { useStyle } from "../../assets/styles/input";
import Input from "../../components/inputs/Input";
import FileInput from "../../components/inputs/FileInput";

const InputBoxes = ({ num }) => {
  const [title, setTitle] = useState("");
  const [Info, setInfo] = useState("");
  const [files, setFiles] = useState();
  const hadleUpload = (e) => setFiles(e.target.files[0]);
  const classes = useStyle();
  const onClose = ()=>{
    setFiles()
  }
  return (
    <div className={classes.box}>
      <div className={classes.iconCounter}>
        <div className={classes.numIcon}>{num}</div>
        <div className={classes.vl}></div>
      </div>
      <div>
        <div className={classes.titleInputContainer}>
          <Input onChange={(e) => setTitle(e.target.value)} title="عنوان" />
        </div>
        <div className={classes.titleInputContainer}>
          <Input
            onChange={(e) => setInfo(e.target.value)}
            title="توضیحات"
            large
          />
        </div>
        <div className={classes.files}>
          <FileInput
            onChange={hadleUpload}
            title="آپلود فایل"
            showFiles
            files={files}
            onClose={() => onClose()}
          />
        </div>
      </div>
    </div>
  );
};

export default InputBoxes;
