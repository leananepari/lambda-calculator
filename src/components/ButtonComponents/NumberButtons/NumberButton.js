import React from "react";

const NumberButton = ({ button, setNumber, num, setNum }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="button number" onClick={() => setNumber(number => {
        if (number === 0 || number === 'x' || number === '/' || number === '-' || number === '+') {
          number = "";
          if (num === undefined) {
            setNum(button)
          } else {
            setNum(num += button)
          }
          return number += button
        } else {
          if (num === undefined) {
            setNum(button)
          } else {
            setNum(num += button)
          }
          return number += button
        }
      })}>{button}</div>
    </>
  );
};

export default NumberButton;
