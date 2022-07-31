import React, { useRef } from "react";
import { useStyle } from "../../assets/styles/input";
import image from "../../assets/images/Image 2.svg";
const FileInput = ({ title, onChange, files, onClose }) => {
  const fileRef = useRef();
  const classes = useStyle();
  const removeFile = () => {
    onClose();
    fileRef.current.value = ""
  };

  return (
    <div className={classes.inputTitle}>
      <div className={classes.titleContainer}>
        <span className={classes.title}>{title}</span>
      </div>
      <input
        type="file"
        className={classes.FileInput}
        onChange={onChange}
        id="file-upload"
        ref={fileRef}
      />
      <div className={classes.FileInputContainer}>
        <label htmlFor="file-upload">
          <div className={classes.FileBtnContainer}>
            <span className={classes.fileBtn}>آپلود</span>
          </div>
        </label>
      </div>
      <div>
        {files && (
          <div className={classes.fileNameContainer}>
            <span onClick={removeFile} className={classes.closeIcon}>
              &times;
            </span>
            <span>{files.name}</span>
            <img className={classes.fileImage} src={image} alt="file" />
          </div>
        )}

        {/* 
        {showFiles &&
          files?.map((item, index) => (
            <div className={classes.fileNameContainer}>
              <span>{item.name}</span>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default FileInput;
