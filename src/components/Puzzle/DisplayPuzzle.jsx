import React, { useState, useEffect } from "react";
import Board from "../Board.jsx";
import { restrictMoves, gameSubject, initGame, setPosition, handleAutomaticMoves } from "../../Game.js";

export function DisplayPuzzle({fen, moves}) {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    initGame();
    setPosition(fen);
    restrictMoves(moves);
    handleAutomaticMoves(moves);

    const subscribe = gameSubject.subscribe(game => {
      setBoard(game.board);
    });

    return () => subscribe.unsubscribe();
  }, [fen, moves]);

  return (
    <div className='container'>
      <div className='board-container'>
        <Board board={board} />
      </div>
    </div>
  );
}