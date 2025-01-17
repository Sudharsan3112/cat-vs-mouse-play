import React, { useState } from 'react';
import Square from './square';
import Happywinner from './happywinner';

import './board.css';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill("🧀"));
  const [XIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null); 
  const [count, setCount] = useState(0); 

  function changeSquare(i) {
    if (squares[i] !== "🧀" || winner) return; 
    const newSquares = [...squares];
    newSquares[i] = XIsNext ? "😼" : "🐭";
    setSquares(newSquares);
    setXIsNext(!XIsNext); 
    setCount(count + 1); 

    const currentWinner = checkWinner(newSquares);
    if (currentWinner) {
      // < Happywinner value={currentWinner}/>;
      setWinner(currentWinner);
    } else if (count + 1 === 9) {
       // < Happywinner/>;
      setWinner("Draw");
    }
  }

  function checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] !== "🧀" && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]=="😼" ? "😼" : "🐭"; 
      }
    }
    return null; 
  }

  return (
    <div className="game-container">
      <h1 style={{ fontStyle: 'italic' }}>😼 versus 🐭</h1>
      <p className="game-description">
        Welcome to Cat (😼) vs Mouse (🐭) Tic Tac Toe! Take turns marking the squares. 
        The first to align three icons in a row, column, or diagonal wins!
      </p>

      {winner && (
        <Happywinner value={winner === "Draw" ?null : winner} />
      )}

      <div className={`board ${winner ? 'disabled' : ''}`}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            handleClick={() => changeSquare(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
