import react from "react";
import { createUseStyles } from "react-jss";
import { pxToRem } from "../../tools/converter";
import {
  BLUE,
  GRAY,
  LIGHT_GRAY,
  RED,
  WHITE,
  GRAY_INPUT,
  GRAY_TEXT,
} from "./constants";
const SimpleBtn = {
  backgroundColor: GRAY_INPUT,
  color: GRAY,
  border: `1px solid ${GRAY_TEXT}`,
  borderRadius: `${pxToRem(15)}rem`,
  padding: `0 ${pxToRem(15)}rem`,
  height:`${pxToRem(56)}rem`,
  width:`${pxToRem(201)}rem`,
  verticalAlign: "middle",
  cursor: "pointer",
  margin:`${pxToRem(6)}rem`,
};
export const useStyle = createUseStyles({
  exitBtn: {
    backgroundColor: LIGHT_GRAY,
    borderRadius: `${pxToRem(10)}rem`,
    border: "0px",
    fontSize: `${pxToRem(12)}rem`,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: `${pxToRem(29)}rem`,
    letterSpacing: "0em",
    textAlign: "center",
    color: GRAY,
    paddingRight: "1rem",
    paddingLeft: "1rem",
    cursor: "pointer",
    "&:hover": {
      color: WHITE,
      backgroundColor: RED,
    },
  },
  title: {
    fontFamily: ["vazir", "Vazir FD", "Vazir FD-WOL"].join(","),
    padding: "0.5rem",
  },
  searchBtn: {
    backgroundColor: BLUE,
    color: WHITE,
    border: "0px",
    borderRadius: `${pxToRem(10)}rem`,
    padding: `0 ${pxToRem(9)}rem`,
    height: "95%",
    verticalAlign: "middle",
    cursor: "pointer",
  },
  SimpleBtn: {
    ...SimpleBtn,
  },
  SimpleBtnBlue: {
    ...SimpleBtn,
    backgroundColor: BLUE,
    color: WHITE,
    border: "0px",
  },
  stitle: {
    fontFamily: ["vazir", "Vazir FD", "Vazir FD-WOL"].join(","),
    fontSize: `${pxToRem(16)}rem`,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: `${pxToRem(26)}rem`,
    letterSpacing: "0em",
    textAlign: "center",
    padding: `${pxToRem(10)}rem ${pxToRem(14)}rem`,
    marginTop:`${pxToRem(8)}rem`,
  },
  textBtn: {
    fontFamily: ["vazir", "Vazir FD", "Vazir FD-WOL"].join(","),
    borderRadius: "nullpx",
    border: "0px",
    backgroundColor: WHITE,
    cursor: "pointer",
    color: BLUE,
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: `${pxToRem(23)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
  },
  iconText: {
    marginLeft: "0.4rem",
    // marginTop:"10px"
  },
  iconImage: {
    width: `${pxToRem(10)}rem`,
    verticalAlign: "middle",
  },
  iconBtnContainer: {
    cursor: "pointer",
    margin: `${pxToRem(7)}rem`,
    alignItems: "flex-start",
  },
  iconImageBtm: {
    width: `${pxToRem(18)}rem`,
  },
});
