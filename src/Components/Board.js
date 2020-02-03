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
      winnerDeclared: false,
      winningPlayer: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  checkIfWinnerDeclared(newBoard, updatedMoves) {
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[0] === newBoard[1] && newBoard[1] === newBoard[2]) {
        if (newBoard[0] !== null) {
          this.setState({
            winnerDeclared: true,
            winningPlayer: newBoard[0]
          });
        }
        return;
      } else if (newBoard[0] === newBoard[3] && newBoard[3] === newBoard[6]) {
        if (newBoard[0] !== null) {
          this.setState({
            winnerDeclared: true,
            winningPlayer: newBoard[0]
          });
        }
        return;
      } else if (newBoard[0] === newBoard[4] && newBoard[4] === newBoard[8]) {
        if (newBoard[0] !== null) {
          this.setState({
            winnerDeclared: true,
            winningPlayer: newBoard[0]
          });
        }
        return;
      } else if (newBoard[1] === newBoard[4] && newBoard[4] === newBoard[7]) {
        if (newBoard[1] !== null) {
          this.setState({
            winnerDeclared: true,
            winningPlayer: newBoard[1]
          });
        }
        return;
      } else if (newBoard[2] === newBoard[4] && newBoard[4] === newBoard[6]) {
        if (newBoard[2] !== null) {
          this.setState({
            winnerDeclared: true,
            winningPlayer: newBoard[2]
          });
        }
        return;
      } else if (newBoard[2] === newBoard[5] && newBoard[5] === newBoard[8]) {
        if (newBoard[2] !== null) {
          this.setState({
            winnerDeclared: true,
            winningPlayer: newBoard[2]
          });
        }
        return;
      } else if (newBoard[3] === newBoard[4] && newBoard[4] === newBoard[5]) {
        if (newBoard[3] !== null) {
          this.setState({
            winnerDeclared: true,
            winningPlayer: newBoard[3]
          });
        }
        return;
      } else if (newBoard[6] === newBoard[7] && newBoard[7] === newBoard[8]) {
        if (newBoard[6] !== null) {
          this.setState({
            winnerDeclared: true,
            winningPlayer: newBoard[6]
          });
        }
        return;
      } else if (updatedMoves === 0) {
        this.setState({
          winnerDeclared: true,
          winningPlayer: "Bwahahaha! Nobody"
        });
        return;
      } else {
        return;
      }
    }
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
      this.checkIfWinnerDeclared(newBoard, updatedMoves);
    } else {
      return;
    }
  }

  render() {
    const mappedBoard = this.state.board;
    const playersTurn = this.state.playerX ? "X" : "O";
    return (
      <div className="board-container">
        {this.state.winnerDeclared ? (
          <>
            <h1>{this.state.winningPlayer + " Wins!!!"}</h1>
            <button onClick={() => this.resetBoard()}>Reset Board</button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    );
  }
}
