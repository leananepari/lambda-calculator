import React from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import { operators } from "./../../../data.js";

const Operators = ({ setNumber, num, setNum }) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operators.map(item => {
         return <OperatorButton button={item.char} setNumber={setNumber} num={num} setNum={setNum}/>
       })}
    </div>
  );
};

export default Operators;