import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function ChessPuzzleApiById() {
  const [puzzle, setPuzzle] = useState(null);

  useEffect(() => {
    const puzzleParams = {
      method: 'GET',
      url: 'https://chess-puzzles.p.rapidapi.com/',
      params: {
        id: 'HxxIU'
      },
      headers: {
        //remove = in api key
        'X-RapidAPI-Key': '=e1873c566emshb08abd08810d6ebp1a2ba8jsn9d05f46cc870',
        'X-RapidAPI-Host': 'chess-puzzles.p.rapidapi.com'
      }
    };

    axios.request(puzzleParams)
      .then(response => {
        console.log(response.data);
        setPuzzle(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!puzzle) {
    return <div>Puzzle Data is being retreived</div>;
  }

  return (
    <div>
   
    </div>
  );
}






//   <p>Here's the puzzle:</p>
//<img src={puzzle.image} alt={puzzle.fen} />