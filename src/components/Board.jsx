import React from 'react'
import BoardSquare from './BoardSquare'
import { getPuzzleSolution, puzzleMoves, FlipBoard } from '../Game'
import { Button } from "react-bootstrap";

import {AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

 export default function Board({board}) {
 function getXYposition(i) { 
    const x = i % 8
    const y = Math.abs(Math.floor(i / 8) - 7)
    return {x, y} 
  }


  function isBlack (i){
    const {x, y} = getXYposition(i)
    return (x + y) % 2 === 0;
    
  }

  function getPosition(i) {
    const {x, y} = getXYposition(i);
    const letter = ["a","b", "c", "d", "e", "f", "g", "h"][x]; 
    return `${letter}${y + 1}`

  }
    return <div className='board'>
        {board.flat().map((piece, i) => 
        <div key={i} className="square">
           <BoardSquare piece={piece}  
           black={isBlack(i)}  
           position = {getPosition(i)}/>
        </div>
        )}
 
        <button type="button" className="btn btn-primary" onClick={() => getPuzzleSolution(puzzleMoves)}>
        Get Solution
      </button>


      <button type="button" className="btn btn-primary" onClick={() => FlipBoard()}>
        Flip Board
      </button>

      {/* set up arrows */}
      <Button variant="primary">
        <AiOutlineArrowLeft/>
      </Button>
      <Button variant="primary">
        <AiOutlineArrowRight/>
      </Button>


    </div>
}






// explain flat method

       {/* mapping through board array */}


//{piece && <p>{JSON.stringify(piece)}</p>} 






// destructuring property being passed -- board is an array

 // x and y axis represent every value on the board (below function is used to get the position)

  // below code is used to check if white or black

   // get x and y position with index

   // get x and y position with index


   // return as object the coordinates

       // 7 is the last index in array (abs makes number positive)

           //using module operator 