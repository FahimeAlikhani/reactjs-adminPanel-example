import React from "react";
import { useStyle } from "../../assets/styles/layout";
import CompanyLogo from "../../assets/images/CompanyLogo.svg"
const SideBarLogo = () => {
  const classes = useStyle();
  return (
      <div className={classes.logoBox}>
        <img className={classes.logoImage} src= {CompanyLogo} alt="icon" />
        <div className={classes.logo}>نقطه اوج افلاک</div>
        <p className={classes.text}>پنل مدیریت گروه آسانسور و پله برقی</p>
      </div>
  );
};

export default SideBarLogo;
