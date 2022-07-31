import react from "react";
import { createUseStyles } from "react-jss";
import { BLUE, LIGHT_GRAY, RED } from "./constants";
import { pxToRem } from "../../tools/converter";
export const useStyle = createUseStyles({
  main: {
    margin: "1rem",
  },
  lineBreak: {
    border: `1px solid  ${LIGHT_GRAY}`,
  },
  inputBox: {
    display: "flex",
  },
  btnContainer: {
    height: `${pxToRem(56)}rem`,
    width: "85%",
    marginBottom: `${pxToRem(42)}rem`,
  },
  addImage: {
    fontSize: `${pxToRem(14)}rem`,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: `${pxToRem(29)}rem`,
    letterSpacing: "0em",
    textAlign: "right",
    color:BLUE
  },
  addImageLogo: {
    width: `${pxToRem(20)}rem`,
    position:'relative',
    top:'0.3rem',
    right:'0.4rem',
    cursor:'pointer'
  },
});
