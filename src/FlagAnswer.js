import React from "react";

const FlagAnswer = ({ correct, answer, handleNext }) => {
  let output = correct
    ? `Correct!: ${answer.name}`
    : `Incorrect! Correct Answer: ${answer.name}`;
  var style = {
    marginLeft: "25px"
  };
  return (
    <div>
      {output}
      <button style={style} onClick={handleNext}>
        NEXT
      </button>
    </div>
  );
};

export default FlagAnswer;
