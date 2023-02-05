import React from "react";
import Counter from "./Counter";

const Player = ({name, id, score, changeScore, removePlayer}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => removePlayer(id)}
        >
          ✖
        </button>
        {name}
      </span>

      <Counter
        score={score}
        id={id}
        changeScore={changeScore}
      />
    </div>
  );
};

export default Player;
