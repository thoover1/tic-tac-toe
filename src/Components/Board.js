import React, { Component } from "react";
import MappedBoard from "./MappedBoard";

export default class Board extends Component {
  constructor() {
    super();

    this.state = {
      board: Array(9).fill(null),
      player: "X",
      popup: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  resetBoard() {
    this.setState({
      board: Array(9).fill(null),
      player: "X",
      popup: false
    });
  }

  handleClick(e) {
    this.setState({
      board: board,
      player: this.state.player
    });
  }
  render() {
    const mappedBoard = this.state.board;
    return (
      <div className="board-container">
        {mappedBoard.map(square => {
          return (
            <MappedBoard
              square={square}
              value={squares[i]}
              onClick={() => {
                board[i] = this.state.player;
                this.setState({
                  board: square.slice()
                });
              }}
            />
          );
        })}
        <button onClick={() => this.resetBoard()}>Reset Board</button>
      </div>
    );
  }
}
