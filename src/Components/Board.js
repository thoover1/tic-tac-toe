import React, { useState } from "react";
import MappedBoard from "./MappedBoard";
import "./Board.css";

const blankBoard = [null, null, null, null, null, null, null, null, null];

const Board = () => {
  const [board, setBoard] = useState(blankBoard);
  const [playerX, setplayerX] = useState(true);
  const [movesRemaining, setmovesRemaining] = useState(9);
  const [winnerDeclared, setwinnerDeclared] = useState(false);
  const [winningPlayer, setwinningPlayer] = useState("");

  //   this.state = {
  //     board: blankBoard,
  //     playerX: true,
  //     movesRemaining: 9,
  //     winnerDeclared: false,
  //     winningPlayer: ""
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  const catsGameIndicator = finalMove => {
    if (finalMove === 0) {
      setwinnerDeclared(true);
      setwinningPlayer("Cat's Game! Nobody");
      // this.setState({
      //   winnerDeclared: true,
      //   winningPlayer: "Cat's Game! Nobody"
      // });
      return;
    }
  };

  const checkForWinner = (newBoard, updatedMoves) => {
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
        setwinnerDeclared(true);
        setwinningPlayer(newBoard[a]);
        // this.setState({
        //   winnerDeclared: true,
        //   winningPlayer: newBoard[a]
        // });
        return newBoard[a];
      } else {
        catsGameIndicator(updatedMoves);
      }
    }
    return null;
  };

  const resetBoard = () => {
    // this.setState({
    //   board: blankBoard,
    //   playerX: true,
    //   movesRemaining: 9,
    //   winnerDeclared: false,
    //   winningPlayer: ""
    // });
    setBoard(blankBoard);
    setplayerX(true);
    setmovesRemaining(9);
    setwinnerDeclared(false);
    setwinningPlayer("");
  };

  const handleClick = (value, index, playersTurn) => {
    if (winnerDeclared === false) {
      if (value === null) {
        let newBoard = [...board];
        let updatedMoves = movesRemaining - 1;
        newBoard.splice(index, 1, playersTurn);
        // this.setState({
        //   board: newBoard,
        //   playerX: !this.state.playerX,
        //   movesRemaining: updatedMoves,
        //   winningPlayer: !this.state.playerX
        // });
        setBoard(newBoard);
        setplayerX(!playerX);
        setmovesRemaining(updatedMoves);
        setwinningPlayer(!playerX);
        checkForWinner(newBoard, updatedMoves);
      } else {
        return;
      }
    } else {
      return;
    }
  };

  const mappedBoard = board;
  const playersTurn = playerX ? "X" : "O";

  let title = null;

  if (winnerDeclared) {
    title = <h1>{winningPlayer + " Wins!!!"}</h1>;
  } else {
    title = <h3 className="player-turn">{playersTurn}'s Turn</h3>;
  }

  return (
    <div className="board-container">
      {title}
      <div className="test">
        {mappedBoard.map((square, i) => {
          return (
            <MappedBoard
              value={square}
              i={i}
              handleClickProp={handleClick}
              playersTurnProps={playersTurn}
            />
          );
        })}
      </div>
      <button onClick={() => resetBoard()}>Reset Board</button>
    </div>
  );
};

export default Board;
