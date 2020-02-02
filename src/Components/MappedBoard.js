import React from "react";

function MappedBoard() {
  render() {
    console.log(this.props.square);
    console.log(this.props.square[i]);
    return (
      <div className="square-container">
        <div className="individual-square" id={this.props.square}>
          <div>{this.props.square[i]}</div>
        </div>
      </div>
    );
  }
}

export default MappedBoard;