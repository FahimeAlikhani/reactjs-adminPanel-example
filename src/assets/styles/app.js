import react from "react";
import { createUseStyles } from "react-jss";
import { pxToRem } from "../../tools/converter";
import { BACKGROUND_GRAY } from "./constants";

export const useStyle = createUseStyles({
  app: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  spinner: {
    fontSize: `${pxToRem(12)}rem`,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: `${pxToRem(29)}rem`,
    letterSpacing: "0em",
    textAlign: "center",
  },
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      direction: "rtl",
      fontFamily: ["vazir", "Vazir FD", "Vazir FD-WOL"].join(","),
    },
    "tr:nth-of-type(even)": {
      backgroundColor: BACKGROUND_GRAY,
    },
  },
});
