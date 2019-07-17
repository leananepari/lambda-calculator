import React from "react";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import { numbers } from "./../../../data.js";

const Numbers = ({ number, setNumber, arr, setArr, num, setNum }) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="numbers-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numbers.map((item, index) => {
         return <NumberButton key={index} button={item} number={number} setNumber={setNumber} arr={arr} setArr={setArr} num={num} setNum={setNum}/>
       })}
    </div>
  );
};

export default Numbers;
