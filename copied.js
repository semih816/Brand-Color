import { getContrastYIQ } from "../helpers";
import { useState } from "react";

function Copied({color}) {
 
    return (
      <>
      <div className="copied" style={{'--bgColor':`#${color}`,"--textsColor":`${getContrastYIQ(color)}`}}>
      Copied #{color} to Clipboard
      </div>
      </>
    );
  }
  
  export default Copied;
  