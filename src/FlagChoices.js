import React from "react";
import "./FlagChoices.css";

const FlagChoices = ({ options, handleClick, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="radio"
          name="userChoice"
          value={options[0]}
          onClick={handleClick}
        />
        <label>{options[0]}</label>
        <input
          type="radio"
          name="userChoice"
          value={options[1]}
          onClick={handleClick}
        />
        <label>{options[1]}</label>
        <input
          type="radio"
          name="userChoice"
          value={options[2]}
          onClick={handleClick}
        />
        <label>{options[2]}</label>
        <input
          type="radio"
          name="userChoice"
          value={options[3]}
          onClick={handleClick}
        />
        <label>{options[3]}</label>
        <button>GUESS</button>
      </div>
    </form>
  </div>
);

export default FlagChoices;
