import React, { useState } from "react";
import './App.css'

import { ChessPuzzleApi } from './components/ChessPuzzleApi';

// import { ChessPuzzleApiById } from './components/ChessPuzzleApiById';

import { NavBar } from './components/NavBar.jsx';

import { DisplayPuzzle } from './components/Puzzle/DisplayPuzzle.jsx';


// import { DisplayPopulated } from './components/Puzzle/DisplayPopulated.jsx';


// useEffect hook listens to observable when component is created

function App() {

  const puzzleMoves = ['a8c8', 'e4f6', 'e7f6', 'e5f6', 'd8f6', 'h2e5', 'f6e5', 'd4e5'];
  const puzzleMoves2 = ['g1h2', 'e8e3', 'e1e3', 'f6f4', 'e3g3', 'g7e5', 'g5f3', 'f4g3'];

  return (
    <div>
       <NavBar/>
       <DisplayPuzzle fen="r2qr1k1/4bpnp/p1p1p1pQ/1p1bP3/2pPN1P1/P4B1P/1P3P1B/R2R2K1 b - - 2 22" moves={puzzleMoves}/>

     
      <ChessPuzzleApi />
    </div>
  );
}

export default App





{/* <NavBar/>
      <DisplayPuzzle fen="r2qr1k1/4bpnp/p1p1p1pQ/1p1bP3/2pPN1P1/P4B1P/1P3P1B/R2R2K1 b - - 2 22" moves={puzzleMoves}/>
      
      <ChessPuzzleApi />
      <ChessPuzzleApiById />

      <DisplayPopulated/> */}











// fen
// : 
// "r2qr1k1/4bpnp/p1p1p1pQ/1p1bP3/2pPN1P1/P4B1P/1P3P1B/R2R2K1 b - - 2 22"
// moves
// : 
// (8) ['a8c8', 'e4f6', 'e7f6', 'e5f6', 'd8f6', 'h2e5', 'f6e5', 'd4e5']
// puzzleid
// : 
// "HQtpc"
// rating
// : 
// 1495
// ratingdeviation
// : 
// 90
// themes
// : 
// (5) ['advantage', 'clearance', 'fork', 'middlegame', 'veryLong']