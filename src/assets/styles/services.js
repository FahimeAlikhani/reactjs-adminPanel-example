import react from "react";
import { createUseStyles } from "react-jss";
import { LIGHT_GRAY } from "./constants";
export const useStyle = createUseStyles({
  main: {
    margin:"1rem"
  },
  lineBreak:{
    border: `1px solid  ${LIGHT_GRAY}` 
  },
  inputBox:{
    display:'flex'
  },
  icon:{
    // flex:'20%'
  }
});
