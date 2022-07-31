import react from "react";
import { createUseStyles } from "react-jss";
import { BlackI, BLUE, RED, WHITE } from "./constants";
import { pxToRem } from "../../tools/converter";
export const useStyle = createUseStyles({
  infoCard: {
    backgroundColor: WHITE,
    borderRadius: `${pxToRem(15)}rem`,
    boxShadow: "0px 4px 24px rgba(34, 34, 34, 0.16)",
    fontStyle: "normal",
    fontWeight: 500,
    letterSpacing: "0em",
    textAlign: "center",
    display: "inline-block",
    padding: "1rem",
    fontFamily: ["vazir", "Vazir FD", "Vazir FD-WOL"].join(","),
    fontSize: `${pxToRem(12)}rem`,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: `${pxToRem(29)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
  },
  content: {
    display: "flex",
    alignContent: "center",
  },
  title: {
    fontFamily: ["vazir", "Vazir FD", "Vazir FD-WOL"].join(","),
    padding: "1rem",
    fontSize: `${pxToRem(15)}rem`,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: `${pxToRem(29)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
  },
  value: {
    fontFamily: ["Vazir FD", "Vazir FD-WOL", "vazir"].join(","),
    padding: "1rem",
    fontSize: `${pxToRem(50)}rem`,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: `${pxToRem(29)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
    color: BLUE,
  },
  Rvalue: {
    color: RED,
  },
  Bvalue: {
    fontFamily: "Poppins",
    fontSize: `${pxToRem(14)}rem`,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: `${pxToRem(29)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
    padding: "1rem",
    color: BlackI,
    margin: "0 2rem",
  },
  icon: {
    textAlign: "center",
    lineHeight: `${pxToRem(29)}rem`,
    padding: "1rem",
  },
  iconImage: {
    width: "1.6rem",
  },
});
