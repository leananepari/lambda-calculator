import React from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file
import { specials } from "../../../data.js";

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div className="special-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specials.map((item, index) => {
         return <SpecialButton key={index} button={item}/>
       })}
    </div>
  );
};

export default Specials;