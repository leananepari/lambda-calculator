import React from "react";

const OperatorButton = ({ button, setNumber, num, setNum }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="button operator" onClick={() => setNumber(button)}>{button}</div>
    </>
  );
};

export default OperatorButton;