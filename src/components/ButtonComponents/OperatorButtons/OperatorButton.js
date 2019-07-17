import React from "react";

const OperatorButton = ({ button, number, setNumber, arr, setArr, num, setNum, calculate }) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="button operator" onClick={(e) => {
        console.log('target', e.target.textContent === '=')
        if (e.target.textContent === '=') {
          setArr(arr.concat(num));
          setNumber(number =  calculate());
          console.log('HERE', number )
         
        } else {
        // console.log('before-arr', arr)
        setArr(arr.concat([num, button]));
        setNum(num = '');
        setNumber(number => number =  button);
        }}}>{button}</div>
      
    </>
  );
};

export default OperatorButton;