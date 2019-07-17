import React from "react";

const NumberButton = ({ button, number, setNumber, arr, setArr, num, setNum }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="button number" onClick={() => setNumber(number => {
        if (number === 0 || number === 'x' || number === '/' || number === '-' || number === '+' || number === '=') {
          number = "";
          if (num === 0) {
            num = '';
          }
          setNum(num += button)
          console.log('NUM', num)
          return number += button
        } else {
          if (num === 0) {
            num = '';
          }
          setNum(num += button)
          console.log('NUM',num)
          return number += button
        }
      })}>{button}</div>
    </>
  );
};

export default NumberButton;
