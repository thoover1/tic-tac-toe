import React, { Component } from "react";
import MappedBoard from "./MappedBoard";
import "./Board.css";

export default class Board extends Component {
  constructor() {
    super();

    this.state = {
      board: Array(9).fill(null),
      playerX: true,
      movesRemaining: 9,
      popup: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  checkIfWinnerDeclared(newBoard, updateMoves) {
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[0] === newBoard[1] && newBoard[1] === newBoard[2]) {
        if (newBoard[0] !== null) {
          window.alert(newBoard[0] + " Wins!");
        }
        return;
      } else if (newBoard[0] === newBoard[3] && newBoard[3] === newBoard[6]) {
        if (newBoard[0] !== null) {
          window.alert(newBoard[0] + " Wins!");
        }
        return;
      } else if (newBoard[0] === newBoard[4] && newBoard[4] === newBoard[8]) {
        if (newBoard[0] !== null) {
          window.alert(newBoard[0] + " Wins!");
        }
        return;
      } else if (newBoard[1] === newBoard[4] && newBoard[4] === newBoard[7]) {
        if (newBoard[1] !== null) {
          window.alert(newBoard[1] + " Wins!");
        }
        return;
      } else if (newBoard[2] === newBoard[4] && newBoard[4] === newBoard[6]) {
        if (newBoard[2] !== null) {
          window.alert(newBoard[2] + " Wins!");
        }
        return;
      } else if (newBoard[2] === newBoard[5] && newBoard[5] === newBoard[8]) {
        if (newBoard[2] !== null) {
          window.alert(newBoard[2] + " Wins!");
        }
        return;
      } else if (newBoard[3] === newBoard[4] && newBoard[4] === newBoard[5]) {
        if (newBoard[3] !== null) {
          window.alert(newBoard[3] + " Wins!");
        }
        return;
      } else if (newBoard[6] === newBoard[7] && newBoard[7] === newBoard[8]) {
        if (newBoard[6] !== null) {
          window.alert(newBoard[6] + " Wins!");
        }
        return;
      } else if (updateMoves === 0) {
        return window.alert("CAT!");
      }
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
    let newBoard = [...this.state.board];
    let updateMoves = this.state.movesRemaining - 1;
    newBoard.splice(index, 1, playersTurn);
    this.setState({
      board: newBoard,
      playerX: !this.state.playerX,
      movesRemaining: updateMoves
    });
    this.checkIfWinnerDeclared(newBoard, updateMoves);
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
