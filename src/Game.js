import { Chess } from "chess.js";
import { BehaviorSubject } from "rxjs";

const promotion = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const chess = new Chess(promotion);

export const gameSubject = new BehaviorSubject();

export let puzzleMoves = [];

let currentMoveIndex = 0;



export function handleAutomaticMoves(puzzleMoves) {
  function PerformAutomaticMove() {
    if (currentMoveIndex % 2 !== 0) {
      console.log(currentMoveIndex);
      // odd move
    } else {
      // even move (automatically make move)
      handleMove(
        puzzleMoves[currentMoveIndex].substring(0, 2),
        puzzleMoves[currentMoveIndex].substring(2, 4)
      ); 
    }
    if (currentMoveIndex < puzzleMoves.length && currentMoveIndex !== 0) {
      setTimeout(PerformAutomaticMove, 1000);
    }
  }
  PerformAutomaticMove();
}



// uses array reverse function to flip the board


export function FlipBoard() {
  const asciiRepresentation = chess.ascii();

  console.log("Prior-Board Flip = ", asciiRepresentation);

  const boardFlip = chess.board().map((row) => row.reverse());

  updateGame({ board: boardFlip });

  chess.board = boardFlip;

  const flippedAscii = asciiRepresentation.split("\n").reverse().join("\n");

  console.log("Post-Board Flip" + flippedAscii);
}




export function getPuzzleSolution(puzzleMoves) {
  let intervalNum = setInterval(() => {
   
    if (currentMoveIndex >= puzzleMoves.length) {
      clearInterval(intervalNum); 
    }
    const tempMove = puzzleMoves[currentMoveIndex];
    handleMove(tempMove.substring(0, 2), tempMove.substring(2, 4));
  }, 1500); // this part is almost the same as handleAutomaticMoves
}




export function restrictMoves(moves) {
  puzzleMoves = moves;
}

export function initGame() {
  updateGame();
}


export function setPosition(fen) {
  chess.load(fen);
  updateGame();
}



export function handleMove(from, to) {
  const promotions = chess.moves({ verbose: true }).filter((m) => m.promotion);
  if (promotions.some((p) => `${p.from}:${p.to}` === `${from}:${to}`)) {
    const pendingPromotion = { from, to, color: promotions[0].color };
    updateGame(pendingPromotion);
  } else {
    const { pendingPromotion } = gameSubject.getValue();
    if (!pendingPromotion) {
      if (puzzleMoves.includes(`${from}${to}`)) {
        move(from, to);
        currentMoveIndex++;
      }
    }
  }
}




export function move(from, to, promotion) {
  let tempMove = { from, to };
  if (promotion) {
    tempMove.promotion = promotion;
  }
  const legalMove = chess.move(tempMove);
  if (legalMove) {
    updateGame();
  }
}

function updateGame(pendingPromotion) {
  const newGame = {
    board: chess.board(),
    pendingPromotion,
  };

  gameSubject.next(newGame);
}





// export function handleFirstMove(puzzleMoves) {
//     const firstMove = puzzleMoves[0];
//     handleMove(firstMove.substring(0, 2), firstMove.substring(2, 4));
// }



 // the code is used to flip all rows and then the board
  //boardFlip takes chess.board() which is called to get current board state, the map function is then used to create a new array by cycling through the old array


//.reverse()


// below function is broken
// export function tempFunction(puzzleMoves) {

//   function performNextMove() {
//     const puzzleMovesIndexVar = puzzleMoves[currentMoveIndex];
   
//     if (currentMoveIndex < puzzleMoves.length) {
//       handleMove(
//         puzzleMoves[currentMoveIndex].substring(0, 2),
//         puzzleMoves[currentMoveIndex].substring(2, 4)
//       ); 
//       setTimeout(performNextMove, 1000);
//       currentMoveIndex++;
//     }
    
//   }
//   performNextMove();
// }


// export function tempFunction2(puzzleMoves) {

//   function performNextMove() {

   

//     const tempMove = puzzleMoves[currentMoveIndex];
//     if (puzzleMoves.indexOf(currentMoveIndex) % 2 !== 0) {
//       handleMove(tempMove.substring(0, 2), tempMove.substring(2, 4));
//     } else {
 
//     }
//     currentMoveIndex++;
//     if (currentMoveIndex < puzzleMoves.length) {
//       setTimeout(performNextMove, 1000);
//     }
//   }

//   performNextMove();
// }



// Modify 




// The function getPuzzleSolution uses the setInterval method and each move is performed every 1.5 seconds since it uses the global variable currentMoveIndex even if the player has already performed moves. It will automatically perform all remaining moves
// check is


// export function handleMove(from, to) {
//   const promotions = chess.moves({ verbose: true }).filter((m) => m.promotion);
//   if (promotions.some((p) => `${p.from}:${p.to}` === `${from}:${to}`)) {
//     const pendingPromotion = { from, to, color: promotions[0].color };
//     updateGame(pendingPromotion);
//   } else {
//     const { pendingPromotion } = gameSubject.getValue();
//     if (!pendingPromotion) {
//       if (puzzleMoves.includes(`${from}${to}`)) {
//         move(from, to);
//       }
//     }
//   }
// }


// export function handleAutomaticMoves(puzzleMoves) {
//   let currentMoveIndex = 0;
//   let playerHasMadeMove = false;

//   function performNextMove() {
//     if (currentMoveIndex % 2 !== 0) {
//       // odd move, wait for player to perform
//       playerMoves.push(puzzleMoves[currentMoveIndex]);
//       playerHasMadeMove = true;
//     } else {
//       // even move, perform automatically
//       autoMoves.push(puzzleMoves[currentMoveIndex]);
//       handleMove(puzzleMoves[currentMoveIndex].substring(0, 2), puzzleMoves[currentMoveIndex].substring(2, 4));
//       playerHasMadeMove = false;
//     }
    
//     currentMoveIndex++;
//     if(playerHasMadeMove || currentMoveIndex === 0){
//     if (currentMoveIndex < puzzleMoves.length) {
//       setTimeout(performNextMove, 1000);
//     }
//   }
//   }
//   performNextMove();
// }

// function playerMove(from, to) {
//   playerHasMadeMove = true;
//   handleMove(from, to);
//   performNextMove();




// used to check if the position in the puzzleMoves array is odd and if so pushes it to the player moves array else it pushes to auto moves
// export function checkIfPlayerMove(move) {
//   const moveIndex = puzzleMoves.indexOf(move);
//   if (moveIndex % 2 === 0) {
//     playerMoves.push(move);
//   } else {
//     autoMoves.push(move);
//   }
// }


// export function handleAutomaticMoves(puzzleMoves) {

//   for (let i = 0; i < puzzleMoves.length; i++) {

//     const tempMove = puzzleMoves[i];

//     if (puzzleMoves.indexOf(i) % 2 !== 0) {
//       //if odd
//       autoMoves.push(tempMove);
//       autoMoves.push(null);
//       if(puzzleMoves[i] === autoMoves[i]){
//         handleMove(tempMove.substring(0, 2), tempMove.substring(2, 4));
//       }
//     } else {
//       //if move index is even and i is even
//       playerMoves.push(null);
//       playerMoves.push(tempMove);
//     }

//   }
// }









//   export function handleAutomaticMoves(moves) {
//     for (let i = 0; i < puzzleMoves.length; i++) {
//         const move = puzzleMoves[i];

//         if (playerMoves.includes(move)) {

//         } else {
//             handleMove(move.substring(0, 2), move.substring(2, 4));
//         }
//     }
//   }





//playerMoves.push(puzzleMoves[currentMoveIndex]);
      
      //autoMoves.push(puzzleMoves[currentMoveIndex]);


      // export function handleAutomaticMoves(puzzleMoves) {
      //   let currentMoveIndex = 0;
        
      //   function performNextMove() {
      //     if (currentMoveIndex >= puzzleMoves.length) {
      //       console.log(currentMoveIndex);
      //       return;
      //     }
      
      //     if{
            
      //     }

      //     else if (currentMoveIndex % 2 !== 0) {
      //       console.log(currentMoveIndex);
      //       // even move
      //       handleMove(puzzleMoves[currentMoveIndex].substring(0, 2), puzzleMoves[currentMoveIndex].substring(2, 4));
      //       setTimeout(performNextMove, 1000);
      //     } 
          
      //     else {
      //       console.log("error");
      //     }
      
      //     currentMoveIndex++;
      //   }
        
      //   performNextMove();
      // }
      

//handleFirstMove(puzzleMoves)
  

          //   export function tempFunction1(puzzleMoves) {
    //     let currentMoveIndex = 1;

    //     handleFirstMove(puzzleMoves)
       
    //     if(currentMoveIndex.length % 2 === 0 && currentMoveIndex !== 1 ) {
    //       console.log(currentMoveIndex);
    //       handleMove(puzzleMoves[currentMoveIndex].substring(0, 2), puzzleMoves[currentMoveIndex].substring(2, 4));
       
    //     }
    //     else if(currentMoveIndex.length % 2 === 0 && currentMoveIndex !== 1 )

    //     currentMoveIndex++;

    // }
















//use for show soloution!!

// export function handleAutomaticMoves(puzzleMoves) {
//   let currentMoveIndex = 0;

//   function performNextMove() {
//     const tempMove = puzzleMoves[currentMoveIndex];
//     if (puzzleMoves.indexOf(currentMoveIndex) % 2 !== 0) {
//       autoMoves.push(tempMove);
//       autoMoves.push(null);
//       handleMove(tempMove.substring(0, 2), tempMove.substring(2, 4));
//     } else {
//       playerMoves.push(null);
//       playerMoves.push(tempMove);
//     }

//     currentMoveIndex++;
//     if (currentMoveIndex < puzzleMoves.length) {
//       setTimeout(performNextMove, 1000);
//     }
//   }

//   performNextMove();
// }
