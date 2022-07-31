import React from "react";
import api from "../../api/apiCallManager";
import deleteIcon from "../../assets/images/delete.svg";
import googleIcon from "../../assets/images/google colorful.svg";

import { useStyle } from "../../assets/styles/button";

const TableActionBtn = ({ rowId, reFetch, setLoading }) => {
  const classes = useStyle();
  const handleDelete = async () => {
    setLoading(true);
    const res = await api.DeleteTableRow(rowId);
    if (res.status === 200) reFetch();
    setLoading(false);
  };
  return (
    <>
      <span className={classes.iconBtnContainer} onClick={() => {}}>
        <img className={classes.iconImageBtm} src={googleIcon} alt="google" />
      </span>
      <span className={classes.iconBtnContainer} onClick={handleDelete}>
        <img className={classes.iconImageBtm} src={deleteIcon} alt="remove" />
      </span>
    </>
  );
};

export default TableActionBtn;
