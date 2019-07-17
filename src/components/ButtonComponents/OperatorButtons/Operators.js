import React from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import { operators } from "./../../../data.js";

const Operators = ({ number, setNumber, arr, setArr, num, setNum }) => {
  // STEP 2 - add the imported data to state
  console.log('ARR HERE', arr)
  function calculate() {
    let array = arr;
    let n = array[0]; 
    let output = parseInt(n);
    console.log('output', output)
    let add = '+';
    let subt = '-';
    let div = '/';
    let mult = 'x';

    console.log('ARRAy', array)
    return output;
  }
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operators.map((item, index) => {
         return <OperatorButton key={index} calculate={calculate} button={item.char} number={number} setNumber={setNumber} arr={arr} setArr={setArr} num={num} setNum={setNum}/>
       })}
    </div>
  );
};

export default Operators;