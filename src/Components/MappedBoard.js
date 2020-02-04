import React, { PureComponent } from "react";
import "./MappedBoard.css";

export default class MappedBoard extends PureComponent {
  render() {
    return (
      <div className="square-container">
        <div
          className="individual-square"
          id={this.props.playersTurnProps}
          onClick={() =>
            this.props.handleClickProp(
              this.props.value,
              this.props.i,
              this.props.playersTurnProps
            )
          }
        >
          <h1>{this.props.value}</h1>
        </div>
      </div>
    );
  }
}
