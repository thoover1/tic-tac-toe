import React, { Component } from "react";
import MappedBoard from "./MappedBoard";
import "./Board.css";

export default class Board extends Component {
  constructor() {
    super();

    this.state = {
      board: Array(9).fill(null),
      playerX: true,
      popup: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  checkIfWinnerDeclared(newBoard) {
    for (let i = 0; i < newBoard.length; i++) {
      console.log(newBoard[6]);
      // if (newBoard[0] === newBoard[1] && newBoard[1] === newBoard[2]) {
      //   if (newBoard[0] !== null) {
      //     window.alert("winner!");
      //   }
      // } else if (newBoard[0] === newBoard[3] && newBoard[3] === newBoard[6]) {
      //   window.alert("winner 2!");
      // } else if (newBoard[0] === newBoard[4] && newBoard[4] === newBoard[8]) {
      //   window.alert("winner 3!");
      // } else if (newBoard[1] === newBoard[4] && newBoard[4] === newBoard[7]) {
      //   window.alert("winner 4!");
      // } else if (newBoard[2] === newBoard[4] && newBoard[4] === newBoard[6]) {
      //   window.alert("winner 5!");
      // } else if (newBoard[2] === newBoard[5] && newBoard[5] === newBoard[8]) {
      //   window.alert("winner 6!");
      // } else if (newBoard[3] === newBoard[4] && newBoard[4] === newBoard[5]) {
      //   window.alert("winner 7!");
      // } else if (newBoard[6] === newBoard[7] && newBoard[7] === newBoard[8]) {
      //   window.alert("winner 8!");
      // }
    }
  }

  resetBoard() {
    this.setState({
      board: Array(9).fill(null),
      playerX: true,
      popup: false
    });
  }

  handleClick(index, playersTurn) {
    var newBoard = [...this.state.board];
    newBoard.splice(index, 1, playersTurn);
    this.setState({
      board: newBoard,
      playerX: !this.state.playerX
    });
    this.checkIfWinnerDeclared(newBoard);
  }

  render() {
    const mappedBoard = this.state.board;

    const playersTurn = this.state.playerX ? "X" : "O";
    return (
      <div className="board-container">
        <h3 className="player-turn">{playersTurn}'s Turn</h3>
        <div className="test">
          {mappedBoard.map((square, i) => {
            return (
              <MappedBoard
                value={square}
                i={i}
                handleClickProp={this.handleClick}
                playersTurnProps={playersTurn}
              />
            );
          })}
        </div>
        <button onClick={() => this.resetBoard()}>Reset Board</button>
      </div>
    );
  }
}
