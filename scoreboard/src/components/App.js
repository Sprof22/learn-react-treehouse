import React, { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Header from "./Header";
import Player from "./Player";

const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1,
    },
    {
      name: "Treasure",
      score: 0,
      id: 2,
    },
    {
      name: "Ashley",
      score: 0,
      id: 3,
    },
    {
      name: "James",
      score: 0,
      id: 4,
    },
  ]);
  const [nextPlayerId, setNextPlayerId] = useState(5)

  const handleRemovePlayer = (id) => {
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
  };

  const handleScoreChange = (id, delta) => {
    setPlayers((prevPlayer) =>
      prevPlayer.map((player) => {
        if (player.id === id) {
          return {
            name: player.name,
            score: player.score + delta,
            id: player.id,
          };
        }
        return player;
      })
    );
  };
  const handleAddPlayer = (name)=> {
    setPlayers(prevPlayer =>[
      ...prevPlayer,
      {
        name,
        score: 0,
        id: nextPlayerId
    }
  ])
  setNextPlayerId(prevId => prevId +1)
  }
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" players={players} />

      {/* Players list */}
      {players.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      ))}
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
};

export default App;
