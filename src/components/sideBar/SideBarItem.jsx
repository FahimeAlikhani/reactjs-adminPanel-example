import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStyle } from "../../assets/styles/layout";
const SideBarItem = ({ item }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const classes = useStyle();
  return (
    <li
      onClick={() => navigate(item.link)}
      className={
        item.link === pathname ? classes.listItemActive : classes.listItem
      }
    >
      <div
        className={
          item.link === pathname
            ? classes.listItemIconActive
            : classes.listItemIcon
        }
      >
        <img src={item.icon} alt="logo" />
      </div>
      <div className={classes.listItemTitle}>{item.title} </div>
    </li>
  );
};

export default SideBarItem;
