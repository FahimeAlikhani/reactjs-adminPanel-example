import React from "react";
import { useStyle } from "../../assets/styles/layout";
import { items } from "./sideBarData";
import SideBarItem from "./SideBarItem";
import SideBarLogo from "./SideBarLogo";

const SideBar = () => {
  const classes = useStyle();
  return (
    <div className={classes.sideBar}>
      <SideBarLogo />
      <ul className={classes.list}>
        {items.map((item, index) => (
          <SideBarItem item={item} key={item.link} />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
