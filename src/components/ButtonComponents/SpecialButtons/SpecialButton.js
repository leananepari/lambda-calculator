import React from "react";

const SpecialButton = ({ button }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="button special">{button}</div>
    </>
  );
};

export default SpecialButton;