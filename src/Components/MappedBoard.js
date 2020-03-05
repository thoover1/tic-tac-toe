import React from "react";
import "./MappedBoard.css";

const MappedBoard = props => {
  return (
    <div className="square-container">
      <div
        className="individual-square"
        id={props.playersTurnProps}
        onClick={() =>
          props.handleClickProp(props.value, props.i, props.playersTurnProps)
        }
      >
        <h1>{props.value}</h1>
      </div>
    </div>
  );
};

export default MappedBoard;
