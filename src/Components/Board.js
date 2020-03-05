import React, { Component } from "react";
import MappedBoard from "./MappedBoard";
import "./Board.css";

export default class Board extends Component {
  constructor() {
    super();

    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      playerX: true,
      movesRemaining: 9,
      winnerDeclared: false,
      winningPlayer: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  catsGameIndicator(finalMove) {
    if (finalMove === 0) {
      this.setState({
        winnerDeclared: true,
        winningPlayer: "Cat's Game! Nobody"
      });
      return;
    }
  }

  checkForWinner(newBoard, updatedMoves) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        this.setState({
          winnerDeclared: true,
          winningPlayer: newBoard[a]
        });
        return newBoard[a];
      } else {
        this.catsGameIndicator(updatedMoves);
      }
    }
    return null;
  }

  resetBoard() {
    this.setState({
      board: Array(9).fill(null),
      playerX: true,
      movesRemaining: 9,
      winnerDeclared: false,
      winningPlayer: ""
    });
  }

  handleClick(value, index, playersTurn) {
    if (value === null) {
      let newBoard = [...this.state.board];
      let updatedMoves = this.state.movesRemaining - 1;
      newBoard.splice(index, 1, playersTurn);
      this.setState({
        board: newBoard,
        playerX: !this.state.playerX,
        movesRemaining: updatedMoves,
        winningPlayer: !this.state.playerX
      });
      this.checkForWinner(newBoard, updatedMoves);
    } else {
      return;
    }
  }

  render() {
    const mappedBoard = this.state.board;
    const playersTurn = this.state.playerX ? "X" : "O";

    let title = null;

    if (this.state.winnerDeclared) {
      title = <h1>{this.state.winningPlayer + " Wins!!!"}</h1>;
    } else {
      title = <h3 className="player-turn">{playersTurn}'s Turn</h3>;
    }

    return (
      <div className="board-container">
        {title}
        <>
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
        </>
      </div>
    );
  }
}
