import react from "react";
import { createUseStyles } from "react-jss";
import { pxToRem } from "../../tools/converter";
import {
  GRAY_TEXT,
  BLACK,
  RED,
  WHITE,
  BACKGROUND_GRAY,
  GRAY,
  LIGHT_GRAY,
} from "./constants";

const itemGenericStyle = {
  width: "100%",
  height: `${pxToRem(64)}rem`,
  paddingTop: `${pxToRem(15)}rem`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  color: GRAY_TEXT,
};
const listItemIcon = {
  flex: "25%",
  display: "grid",
  placeItems: "center",
};

export const useStyle = createUseStyles({
  main: {
    display: "flex",
    height: "93%",
    padding: `${pxToRem(32)}rem`,
    
  },
  content: {
    backgroundColor: BACKGROUND_GRAY,
    width: "100vw",
    borderRadius: `${pxToRem(30)}rem`,
    marginRight: `${pxToRem(32)}rem`,
  },
  header: {
    borderRadius: `${pxToRem(30)}rem ${pxToRem(30)}rem 0 0`,
    display: "flex",
    padding: `${pxToRem(24)}rem ${pxToRem(56)}rem ${pxToRem(23)}rem ${pxToRem(56)}rem`,
    alignItems: "center",
  },
  pages: {
    padding: "0 1rem",
  },
  headerTitle: {
    flex: "60%",
    fontSize: `${pxToRem(36)}rem`,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: `${pxToRem(58)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
    color: GRAY,
    textAlign: "right",
  },
  hoDivider: {
    width: "94%",
    border: `1px solid ${LIGHT_GRAY}`,
  },
  timeText: {
    marginLeft: "1rem",
  },
  timeHolder: {
    fontSize: `${pxToRem(12)}rem`,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: `${pxToRem(29)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
    color: GRAY_TEXT,
    display: "flex",
  },
  sideBar: {
    //backgroundColor: "yellow",
    height: "100%",
    width: "30vw",
   // marginRight: "1rem",
  },
  list: {
    fontSize: `${pxToRem(22)}rem`,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: `${pxToRem(35)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
    listStyleType: "none",
    width: "100%",
    margin: `${pxToRem(15)}rem`,
    marginRight:0,
  },
  listItem: {
    ...itemGenericStyle,
    "&:hover": {
      color: BLACK,
      "& > *":{
        opacity:'100%'
      }
    },
  },
  listItemActive: {
    ...itemGenericStyle,
    color: BLACK,
  },
  listItemIcon: {
    ...listItemIcon,
    opacity: "60%",
  },
  listItemIconActive: {
    ...listItemIcon,
    opacity: "100%",
  },
  listItemTitle: {
    flex: "65%",
  },
  logoBox: {
    height:`${pxToRem(255)}rem`,
    width: "100%",
    borderRadius: `${pxToRem(30)}rem`,
    //marginTop: "1rem",
    backgroundImage: `linear-gradient(209.22deg, ${RED} 8.18%, rgba(253, 61, 57, 0.7) 92.37%)`,
    color: WHITE,
  },
  largeLogo: {
    fontSize: `${pxToRem(58)}rem`,
    fontStyle: "medium",
    fontWeight: 500,
    lineHeight: `${pxToRem(103)}rem`,
    letterSpacing: "0em",
    textAlign: "center",
    paddingTop: "1rem",
  },
  logo: {
    fontFamily: "Kalameh",
    width: "100%",
    fontSize: `${pxToRem(52)}rem`,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: `${pxToRem(58)}rem`,
    letterSpacing: "0em",
    textAlign: "center",
    verticalAlign: "top",
  },
  logoImage: {
    width: "60%",
    margin:`${pxToRem(54)}rem ${pxToRem(90)}rem ${pxToRem(24)}rem ${pxToRem(44)}rem`,
  },
  text: {
    fontFamily: "Kalameh",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: `${pxToRem(22)}rem`,
    lineHeight: `${pxToRem(24.6)}rem`,
    textAlign: "center",
    verticalAlign: "top",
  },
  subTitle: {
    fontSize: `${pxToRem(14)}rem`,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: `${pxToRem(23)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
    margin: 0,
  },
});
