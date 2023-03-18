import React from 'react';
import { Accordion, Card, ListGroup, Form, Button } from 'react-bootstrap';
import { DisplayPuzzle } from './DisplayPuzzle.jsx';

export function DisplayPopulated({ puzzles }) {
  console.log(puzzles)
  console.log(puzzles.map(puzzle => puzzle.themes));
  console.log(puzzles.map(puzzle => puzzle.fen));




  return (
    <div>
      {puzzles.length > 0 ? (
        <Accordion>
          {puzzles.map((puzzle, index) => (
            <Accordion.Item key={index} eventKey={`${index}`}>
              <Accordion.Header>
                <h1>Puzzle: {index}</h1>
              </Accordion.Header>
              <Accordion.Body>
                <DisplayPuzzle fen={puzzle.fen} moves={puzzle.moves} />
                <Card style={{ width: '30rem' }}>
                <ListGroup variant="flush">
                <ListGroup.Item>
                <p>Fen: {puzzle.fen}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                <p>Puzzle ID: {puzzle.puzzleid}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                <p>Rating: {puzzle.rating}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                <p>Rating Deviation: {puzzle.ratingdeviation}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                <p>Themes: {JSON.stringify(puzzle.themes)}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                <p>Puzzle Moves: {JSON.stringify(puzzle.moves)}</p>
                </ListGroup.Item>
                </ListGroup>
                </Card>
           
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <div>Puzzle data being retrieved</div>
      )}
    </div>
  );
}






{/* Puzzle {index + 1} */}

{/* 

// return (
//   <div>
//     {puzzles.length > 0 ? (
//       <Accordion>
//         {puzzles.map((puzzle, index) => (
//           <Card key={index}>
//             <Card.Header>
//               <Accordion.Toggle as={Button} variant='link' eventKey={`${index}`}>
//                 Puzzle {index + 1}
//               </Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey={`${index}`}>
//               <Card.Body>
//                 <DisplayPuzzle fen={puzzle.fen} moves={puzzle.moves} />
//                 <p>Themes: {JSON.stringify(puzzle.themes)}</p>
//                 <p>Rating: {puzzle.rating}</p>
//                 <p>Player Moves: {puzzle.playerMoves}</p>
//                 <p>Count: {puzzle.count}</p>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//         ))}
//       </Accordion>
//     ) : (
//       <div>No puzzle data yet</div>
//     )}
//   </div>
// );
// } */}














//     import React, { useState } from "react";
// import axios from "axios";
// import { Accordion, Card, Form, Button } from "react-bootstrap";

// export function DisplayPopulated() {
//   const [params, setParams] = useState({
//     themes: '["middlegame","advantage"]',
//     rating: "1500",
//     themesType: "ALL",
//     playerMoves: "4",
//     count: "2",
//   });

//   const [puzzles, setPuzzles] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const puzzleParams = {
//       method: "GET",
//       url: "https://chess-puzzles.p.rapidapi.com/",
//       params,
//       headers: {
//         'X-RapidAPI-Key': '93d55d216emsh04501843112801fp113f74jsn8bd48ff6313d',
//         'X-RapidAPI-Host': 'chess-puzzles.p.rapidapi.com'
//       },
//     };

//     axios
//       .request(puzzleParams)
//       .then((response) => {
//         const puzzles = response.data.puzzles;
//         setPuzzles(puzzles);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       {puzzles.length > 0 ? (
//   <Accordion>
//     {puzzles.map((puzzle, index) => (
//       <Card key={index}>
//         <Card.Header>
//           <Accordion.Toggle as={Button} variant="link" eventKey={`${index}`}>
//             Puzzle {index + 1}
//           </Accordion.Toggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey={`${index}`}>
//           <Card.Body>
//             <h2>{puzzle.puzzle}</h2>
//             <p>Themes: {JSON.stringify(puzzle.themes)}</p>
//             <p>Rating: {puzzle.rating}</p>
//             <p>Player Moves: {puzzle.playerMoves}</p>
//             <p>Count: {puzzle.count}</p>
//           </Card.Body>
//         </Accordion.Collapse>
//       </Card>
//     ))}
//   </Accordion>
// ) : (
//   <div>No puzzle data yet</div>
// )}
// </div>
//       );
//     };
    