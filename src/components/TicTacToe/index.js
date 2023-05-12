import { Board, Button, Container } from "./styled";
import React, { useState } from "react";

const initialPositions = [null, null, null, null, null, null, null, null, null];

export default function TicTacToe() {
  const [squares, setSquares] = React.useState(initialPositions);
  const [currentPlayer, setCurrentPlayer] = React.useState("X");

  const getWinner = () => {
    const posibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < posibleWins.length; i++) {
      const [a, b, c] = posibleWins[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = getWinner(squares);

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }

    squares[i] = currentPlayer;
    setSquares(squares);
    if (currentPlayer === "X") setCurrentPlayer("O");
    if (currentPlayer === "O") setCurrentPlayer("X");
    getWinner(squares);
  };

  const handleRestart = () => {
    setCurrentPlayer("X");
    setSquares(initialPositions);
    getWinner(squares);
  };

  const Square = ({ value, onClick }) => (
    <Button onClick={onClick} disabled={!!value}>
      {value}
    </Button>
  );

  return (
    <Container>
      {!winner && (
        <>
          <div>Player is: {currentPlayer}</div>

          <Board>
            {squares.map((square, i) => {
              return (
                <Square key={i} value={square} onClick={() => handleClick(i)} />
              );
            })}
          </Board>
        </>
      )}
      {winner && <div>Winner is {winner}</div>}
      <button onClick={handleRestart}>Restart Game!</button>
    </Container>
  );
}



<div className="board-row" style={rowStyle}>
<Square index='1' onClick={() => handleClick(1)} />
<Square index='2' onClick={() => handleClick(2)}/>
<Square index='3' onClick={() => handleClick(3)}/>
</div>