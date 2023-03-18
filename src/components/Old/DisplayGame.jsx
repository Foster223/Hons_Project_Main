import React, { useEffect, useState } from 'react';
import Board from "../Board.jsx";
import { gameSubject, initGame } from "../../Game.js";

export function DisplayGame() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    initGame();
    

    const subscribe = gameSubject.subscribe(game => {
      setBoard(game.board);
    });

    return () => subscribe.unsubscribe();
  }, []);

  return (
    <div className='container'>
      <div className='board-container'>
        <Board board={board} />
      </div>
    </div>
  );
}

