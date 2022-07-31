import react from "react";
import { createUseStyles } from "react-jss";
import { pxToRem } from "../../tools/converter";
import { GRAY_TEXT, WHITE, GRAY, BACKGROUND_GRAY } from "./constants";

const ThBodyStyle = {
  fontFamily: ["vazir", "Vazir FD", "Vazir FD-WOL"].join(","),
  fontSize: `${pxToRem(12)}rem`,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: `${pxToRem(12)}rem`,
  letterSpacing: "0em",
  textAlign: "center",
  color: GRAY,
};
export const useStyle = createUseStyles({
  tableContainer: {
    border: ` 1px solid ${GRAY_TEXT}`,
    boxSizing: "border-box",
    borderRadius: `${pxToRem(15)}rem`,
    backgroundColor: WHITE,
    paddingBottom: "3rem",
  },
  table: {
    width: "100%",
    boxSizing: "border-box",
    borderRadius: `${pxToRem(15)}rem`,
    backgroundColor: WHITE,
  },
  tableHeader: {
    border: ` 1px solid ${GRAY_TEXT}`,
    boxShadow: "0px 1px 2px rgba(34, 34, 34, 0.08)",
    padding: "4rem",
    borderCollapse: "collapse",
    height: "2.8rem",
  },
  trHeader: {
    fontFamily: ["vazir", "Vazir FD", "Vazir FD-WOL"].join(","),
    fontSize: `${pxToRem(12)}rem`,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: `${pxToRem(12)}rem`,
    letterSpacing: "0em",
    textAlign: "center",
    color: GRAY,
  },
  thBody: {
    ...ThBodyStyle,
  },
  draggableThBody: {
    ...ThBodyStyle,
    cursor: "pointer",
    userSelect: "none",
  },
  tbody: {
    borderCollapse: "collapse",
    color: GRAY,
  },
  trBody: {
    border: ` 1px solid ${GRAY_TEXT}`,
    boxSizing: "border-box",
    borderRadius: "0px",
    height: "2.8rem",
    color: GRAY,
    "tr:nth-child(even)": {
      backgroundColor: BACKGROUND_GRAY,
    },
  },
  tdBody: {
    fontFamily: ["vazir", "Vazir FD", "Vazir FD-WOL"].join(","),
    fontSize: `${pxToRem(12)}rem`,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: `${pxToRem(29)}rem`,
    letterSpacing: "0em",
    textAlign: "center",
    borderCollapse: "collapse",
    color: GRAY,
  },
  filterContainer: { display: "flex" },
});
