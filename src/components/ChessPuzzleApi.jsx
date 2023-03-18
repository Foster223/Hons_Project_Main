import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { DisplayPopulated } from "./Puzzle/DisplayPopulated.jsx";


export function ChessPuzzleApi() {
  const [params, setParams] = useState({
    themes: '["middlegame","advantage"]',
    rating: "1500",
    themesType: "ALL",
    playerMoves: "4",
    count: "2",
  });


  const [puzzleParams, setPuzzleParams] = useState(null);
  
  const [puzzles, setPuzzles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = {
      method: "GET",
      url: "https://chess-puzzles.p.rapidapi.com/",
      params,
      headers: {
        'X-RapidAPI-Key': '93d55d216emsh04501843112801fp113f74jsn8bd48ff6313d',
        'X-RapidAPI-Host': 'chess-puzzles.p.rapidapi.com'
      },
    };

    setPuzzleParams(queryParams);

    axios
      .request(queryParams)
      .then((response) => {
        console.log(response.data);
        const puzzles = response.data.puzzles;
        setPuzzles(puzzles);
        console.log(puzzles);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="f_themes">
          <Form.Label>Themes:</Form.Label>
          <Form.Control
            type="text"
            value={params.themes}
            onChange={(e) => setParams({ ...params, themes: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="f_rating">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            type="text"
            value={params.rating}
            onChange={(e) => setParams({ ...params, rating: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="r_theme_type">
          <Form.Label>Themes Type:</Form.Label>
          <Form.Control
            type="text"
            value={params.themesType}
            onChange={(e) =>
              setParams({ ...params, themesType: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="f_player_rating">
          <Form.Label>Player Moves:</Form.Label>
          <Form.Control
            type="text"
            value={params.playerMoves}
            onChange={(e) =>
              setParams({ ...params, playerMoves: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="f_count">
          <Form.Label>Count:</Form.Label>
          <Form.Control
            type="text"
            value={params.count}
            onChange={(e) => setParams({ ...params, count: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Get Chess Puzzles
        </Button>
      </Form>
      {puzzles.length > 0 && <DisplayPopulated puzzles={puzzles} />}
    </div>
  
  );
};
















      // {puzzle ? (
      //   <div>
      //     <h2>{puzzle.puzzle}</h2>
      //     <p>{puzzle.answer}</p>
      //   </div>
      // ) : (
      //   <div>No puzzle data yet</div>
      // )}